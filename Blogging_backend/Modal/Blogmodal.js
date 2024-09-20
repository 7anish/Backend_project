const mongoose = require('mongoose')

const Blogschema =new  mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    },
    coverPhoto : {
        type : String,
        required : true,
        default : "default.jpeg"
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
} , {timestamps : true});

const blog = mongoose.model('blog' , Blogschema)
module.exports = blog