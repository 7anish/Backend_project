const mongoose = require('mongoose')
const { createHmac , randomBytes} = require('crypto');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    salt : {
        type : String
    },
    password :{
        type : String,
        required : true
    },
    profilephoto : {
        type : String,
        default : 'default.webp',
        required : true,
    },

    role : {
        type : String ,
        enum : ['USER' , 'ADMIN'],
        default :  "USER"
    }
})

// Function is creating salt and encrypted password add pass it 
userSchema.pre('save' , function (next){
    const user = this;
    const salt = randomBytes(8).toString('hex');  // tostrinx hex is done to avoid the special character like backsalse \n\t

    // generating the password
    const password = createHmac('sha256' , salt)
                    .update(user.password)
                    .digest('hex');
    user.password = password
    user.salt = salt
    next()
})

// Function is matching the password when the user is logging in and verify that passwod is incorrect or not
userSchema.static("matchpassword" , async function  (email , password){
    const result = await this.findOne({ email : email })
    console.log(result);

    if(!result)  throw "Incorrect Username/Email"

    // reteriving the sath and password from database
    const salt = result.salt
    const savedPasswod = result.password

    // generatin the password 
    const generatedPassword = createHmac('sha256' , salt)
                                .update(password)
                                .digest('hex');

    // comapring the password is matched or not
    if(generatedPassword != savedPasswod) throw "Passwod Didn't Match"

    // returning the whole use to avoid the dual quear to database
    return result;

} )


const user = mongoose.model('user' , userSchema);
module.exports = user