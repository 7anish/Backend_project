const jwt = require('jsonwebtoken')
require('dotenv').config()
const KEY = process.env.KEY

// generatin the jwt token 
const generateToken = (email, password , id , name)=>{
    return jwt.sign({
        email : email,
        password : password,
        id : id,
        name : name
    } , KEY  , {expiresIn :'1h'})
}

// verifying the jwt token
const verifyToken = (token)=>{
    return jwt.verify(token , KEY)
}

module.exports = {
    generateToken ,
    verifyToken
}