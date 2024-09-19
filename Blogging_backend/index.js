const express = require('express')
const userSchema = require('./Routers/UserRouter')
const {handleconnection} = require('./Config/ConnectionDB')
const path = require('path')

//Config Env Files
require('dotenv').config()
const PORT = process.env.PORT
const URL  = process.env.DB_URL



handleconnection(URL); // Connection With Database

const app = express()

//middleware
app.use(express.static(path.resolve('./public')))
app.use(express.json())
app.use(express.urlencoded({extended : false}));

//router
app.use('/api/v1/user' , userSchema )

app.listen(PORT , ()=>{
    console.log(`Server Started At Port - ${PORT}`)
})