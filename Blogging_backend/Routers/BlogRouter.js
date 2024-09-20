const  { handleCreateBlog, handleUpdateBlog, handleDeleteBlog, handleReadAllBlogs , handleReadOneBlogs ,handlePersonalBlog } = require('../Controllers/BlogController');
const express = require('express');
const {uploatBlogPhoto} = require('../Config/MulterConfig')
const checkauthentication = require('../Middleware/auth')

const route = express.Router();

route.post('/createblog' , checkauthentication ,uploatBlogPhoto.single('blogPhoto'),handleCreateBlog );
route.patch('/updateblog/:id' , checkauthentication,handleUpdateBlog);
route.delete('/deleteblog/:id' , checkauthentication,handleDeleteBlog);

// get All the blog created by user authentication needed
route.get('/getpersonalblogs' , checkauthentication, handlePersonalBlog);

// all the routes above required authentication

// Get all blogs 
route.get('/getallblogs' , handleReadAllBlogs);
// Get a specfic blog
route.get('/getoneblogs/:id' , handleReadOneBlogs);

module.exports = route