const { verifyToken } = require('../Config/Jwtgenererator')

const checkauthentication = (req, res, next) => {
    try {
        const token = req.get('Authorization').split("Bearer ")[1]
        const user = verifyToken(token)
        console.log(user)
        req.user = user;
        next();
    }catch(e){
        res.status(401).json({message : 'User Is Not Authorised'})
    }
}

module.exports = checkauthentication