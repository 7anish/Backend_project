const express = require('express')
const userRouter = require('./Routers/UserRouter')
const {handleconnection} = require('./Config/ConnectionDB')
const path = require('path');
const blogRouter = require('./Routers/BlogRouter')

//Config Env Files
require('dotenv').config()
const PORT = process.env.PORT
const URL  = process.env.DB_URL



handleconnection(URL); // Connection With Database

const app = express()

//middleware
app.use(express.static(path.resolve('./public'))); // these middleware is used to serve the publce floder staticily
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//router
app.use('/api/v1/user' , userRouter )
app.use('/api/v1/blog' ,blogRouter )

app.listen(PORT , ()=>{
    console.log(`Server Started At Port - ${PORT}`)
})