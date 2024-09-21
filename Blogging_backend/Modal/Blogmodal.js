const mongoose = require('mongoose')

const Blogschema =new  mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    titleContent : {
        type : String,
        required : true,
    },
    fullContent : {
        type : String,
        required : true,
    },
    coverPhoto : {
        type : String,
        default : "default.jpeg"
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    authorName: {
        type : String,
        required : true
    }
} , {timestamps : true});

const blog = mongoose.model('blog' , Blogschema)
module.exports = blog