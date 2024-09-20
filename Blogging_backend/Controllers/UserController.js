const user = require('../Modal/UserModal');
const {generateToken} = require('../Config/Jwtgenererator')


const handleCreateUser = async (req, res) => {
    try {
        //Checking each and every filed whether it is empty or not
        if (!req.body  || !req.body.name || !req.body.password || !req.body.email) return res.status(400).json({ error: "Body Not found" });
        // Creating user
        const filename = req.file ? req.file.filename : 'default.webp'
        const result = await user.create({
            name: req.body.name,
            email: req.body.email,
            salt: req.body.salt,
            password: req.body.password,
            profilephoto : filename
        })

        return res.status(201).json({ message: "Account created succesfully"})

    }catch(e){
        console.log(e)
        return res.status(400).json({error : "Some thing Went wrong while Singin"});
    }
}


const handleLoginUser =async (req,res)=>{
    console.log(req.body)
    try {
        //Checking each and every filed whether it is empty or not
        if (!req.body || !req.body.password || !req.body.email) return res.status(400).json({ error: "Body Not found" });
        const result = await user.matchpassword(req.body.email , req.body.password);

        const token = generateToken(result.email , result.password , result._id); // Generatin the Jwt tokern
        // res.cookie('uid' , token)
        // return  res.end()
        
        return res.status(200).json({ token : token});

    }catch(e){
        return res.status(400).json({error : e});
    }
}

const handleUpdateProfile = (req,res)=>{
    // code to update profile or profile photo
}

module.exports = {
    handleCreateUser,
    handleLoginUser,
    handleUpdateProfile
}