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
        console.log(e);
        return res.status(400).json({error : "Some thing Went wrong while Singin" });
    }
}


const handleLoginUser =async (req,res)=>{
    try {
        //Checking each and every filed whether it is empty or not
        if (!req.body || !req.body.password || !req.body.email) return res.status(400).json({ error: "Body Not found" });
        const result = await user.matchpassword(req.body.email , req.body.password);

        const token = generateToken(result.email , result.password , result._id , result.name); // Generatin the Jwt tokern
        // res.cookie('uid' , token)
        // return  res.end()
        
        return res.status(200).json({ token : token});

    }catch(e){
        console.log(e);
        return res.status(400).json({error : "not found"});
    }
}


const handleUpdateProfile = async (req,res)=>{
    try {
        const filename = req.file ? req.file.filename : 'default.webp'
        const updatedValues = {
            ...req.body,
            profilephoto: filename,

        }
        if(req.params.id !== req.user.id) return res.status(403).json({error : "Unauthorised to do so"})
        const result = await user.findByIdAndUpdate(req.user.id , { $set : updatedValues})

        if (!result) return res.status(404).json({ messgae: "user not found" });
        return res.status(200).json({ message: "User updated sucessfully" })
    }catch(e){
        console.log(e);
        return res.status(500).json({ message: "Something went wrong" })
    }
}

module.exports = {
    handleCreateUser,
    handleLoginUser,
    handleUpdateProfile
}