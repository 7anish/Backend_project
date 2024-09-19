const multer = require('multer')
const path  =  require('path');


const userStorage = multer.diskStorage({
    destination : function(req,file , cb){
        cb(null , path.resolve('./public/user'));
    },
    filename : function(req,file , cb){
        const ext = path.extname(file.originalname)
        cb(null , `${Date.now()}${ext}`);
    }
})


const blogStorage = multer.diskStorage({
    destination : function(req,file , cb){
        cb(null , './public/BlogPhoto');
    },
    filename : function(req,file , cb){
        const ext = path.extname(file.originalname)
        cb(null , `${Date.now()}${ext}`);
    }
})

const uploatUserPhoto =  multer({ storage : userStorage })
const uploatBlogPhoto =  multer({ storage : blogStorage})

module.exports = {
    uploatBlogPhoto,
    uploatUserPhoto
}