const express = require('express')
 require('./config/db')
require('dotenv').config()
const router = require('./routers/schoolRouter')

const app = express()
app.use(router)

const port = process.env.port
app.use(express.json())
app.listen(port, ()=>{
    console.log(`app is listening to ${port}`)
})