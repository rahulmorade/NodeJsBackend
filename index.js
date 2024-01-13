require('dotenv').config(); //for dynamic port 

const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res) => {
    res.send("user route*********************")
})

app.get('/about', (req,res) => {
    res.send('<h1>Rahul_Morade</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})