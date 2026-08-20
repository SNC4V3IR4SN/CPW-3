const express = require("express")
const app =express()

const cors= require("cors"); app.use(cors())
app.use(express.static("../frotend"))


app.get("/dog" , async (req, res) => {
  const response =await fetch ('http://dog.ceo/api/breeds/image/random')
  const dados= await response.json()
  res.json(dados)  
})

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})