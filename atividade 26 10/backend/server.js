
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Permite ler os dados enviados pelos formulários HTML.
app.use(express.urlencoded({ extended: true }));

// Permite carregar o arquivo CSS nas páginas.
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/style.css'));
});

// Configuração da sessão.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 5 * 60 * 1000
    }
}));

// Configuração do envio de e-mail pelo Gmail.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Página inicial de login.
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Recebe o e-mail e envia o código.
app.post('/login', async (req, res) => {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.redirect('/login');
    }

    // Gera um código numérico de quatro dígitos.
    const codigo = String(
        Math.floor(1000 + Math.random() * 9000)
    );

    // Guarda o código e o e-mail na sessão.
    req.session.email = email;
    req.session.codigo = codigo;
    req.session.codigoExpira = Date.now() + 5 * 60 * 1000;
    req.session.usuarioAutenticado = false;

    try {
        // Envia o código para o e-mail informado.
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Seu código de acesso',
            text: `Seu código de acesso é: ${codigo}. Ele expira em 5 minutos.`
        });

        res.redirect('/confirmar');
    } catch (erro) {
        console.error('Erro ao enviar e-mail:', erro.message);

        delete req.session.codigo;
        delete req.session.email;
        delete req.session.codigoExpira;

        res.redirect('/login');
    }
});

// Mostra a página de confirmação.
app.get('/confirmar', (req, res) => {
    if (!req.session.codigo) {
        return res.redirect('/login');
    }

    res.sendFile(path.join(__dirname, '../frontend/confirmar.html'));
});

// Confere o código digitado.
app.post('/confirmar', (req, res) => {
    const { codigo } = req.body;

    if (!req.session.codigo || !req.session.email) {
        return res.redirect('/login');
    }

    // Verifica se o código ainda está dentro do prazo.
    if (Date.now() > req.session.codigoExpira) {
        delete req.session.codigo;
        delete req.session.email;
        delete req.session.codigoExpira;

        return res.redirect('/login');
    }

    // Compara o código digitado com o código da sessão.
    if (codigo === req.session.codigo) {
        req.session.usuarioAutenticado = true;

        delete req.session.codigo;
        delete req.session.codigoExpira;

        return res.redirect('/dashboard');
    }

    // Se o código estiver errado, volta ao início.
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Protege a página do dashboard.
function verificaAcesso(req, res, next) {
    if (req.session.usuarioAutenticado) {
        return next();
    }

    res.redirect('/login');
}

app.get('/dashboard', verificaAcesso, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
});

// Encerra a sessão.
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Inicia o servidor.
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/login');
});
