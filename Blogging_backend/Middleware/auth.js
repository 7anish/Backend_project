const {verifyToken} = require('../Config/Jwtgenererator')

const checkauthentication = (req,res,next)=>{
    const token = req.get('Authorization').split("Bearer ")[1]
    const user = verifyToken(token)
    console.log(user)
    req.user = user;
    next();
}

module.exports = checkauthentication