const  { handleCreateBlog, handleUpdateBlog, handleDeleteBlog, handleReadBlogs } = require('../Controllers/BlogController');
const express = require('express');
const {uploatBlogPhoto} = require('../Config/MulterConfig')

const route = express.Router();

route.post('/createblog' , uploatBlogPhoto.single('blogPhoto') ,handleCreateBlog );
route.patch('/updateblog/:id' , handleUpdateBlog);
route.delete('/deleteblog/:id' , handleDeleteBlog);

module.exports = route