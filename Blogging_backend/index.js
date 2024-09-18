const express = require('express')
const userSchema = require('./Routers/UserRouter')
const {handleconnection} = require('./Config/ConnectionDB')

//Config Env Files
require('dotenv').config()
const PORT = process.env.PORT
const URL  = process.env.DB_URL



handleconnection(URL); // Connection With Database

const app = express()

//middleware
app.use(express.json())

//router
app.use('/api/v1/user' , userSchema )

app.listen(PORT , ()=>{
    console.log(`Server Started At Port - ${PORT}`)
})