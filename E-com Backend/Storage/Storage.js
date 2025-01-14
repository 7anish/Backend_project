const multer = require('multer')
const path  =  require('path');


// in case of localdisk
const Storage = multer.diskStorage({
    destination : function(req,file , cb){
        cb(null , './public');
    },
    filename : function(req,file , cb){
        const ext = path.extname(file.originalname)
        cb(null , `${Date.now()}${ext}`);
    }
})

const upload =  multer({ storage : Storage })


// in-case of cloudinary

// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer')


// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret:process.env.CLOUDINARY_SECRET
// });

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: 'CloudinaryDemo',
//         allowedFormats: ['jpeg', 'png', 'jpg'],
//     }                                                              
// }); 

module.exports = {
    upload
}