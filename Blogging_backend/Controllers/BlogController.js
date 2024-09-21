const blog = require('../Modal/Blogmodal')
const mongoose = require('mongoose')

const handleCreateBlog = async (req, res) => {
    try {
        if (!req.body) return res.status(400).json({ error: "Body is required" });
        const filename = req.file ? req.file.filename : 'default.jpeg'
        await blog.create({
            title: req.body.title,
            titleContent: req.body.titlecontent,
            fullContent: req.body.fullcontent,
            coverPhoto: filename,
            createdBy: req.user.id
        })

        return res.status(201).json({ Message: "blog created succesfully" })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e });
    }
}

const handleUpdateBlog = async (req, res) => {
    try {
        const id = req.params.id
        const filename = req.file ? req.file.filename : 'default.jpeg'
        const updatedValues = {
            ...req.body,
            coverPhoto: filename,

        }
        const result = await blog.findOneAndUpdate({ _id: req.params.id, createdBy: req.user.id }, { $set: updatedValues })

        if (!result) return res.status(404).json({ messgae: "Unable to find blog" });
        return res.status(200).json({ message: "Blog updated sucessfully" })
    }catch(e){
        console.log(e);
        return res.status(500).json({ message: "Something went wrong" })
    }
}

const handleDeleteBlog = async (req, res) => {
    const id = req.params.id
    const data = await blog.findOneAndDelete({ _id: req.params.id }, { createdBy: req.user.id })
    if (!data) return res.status(404).json({ Error: 'No blog available With this Id' });
    return res.status(200).json({ Message: "Blog Deleted Sucess Fully" });
}

const handleReadAllBlogs = async (req, res) => {
    const data = await blog.find({})
    if (!data) return res.status(404).json({ Error: 'No blog available' });
    return res.status(200).json({ data: data });
}

const handleReadOneBlogs = async (req, res) => {
    const id = req.params.id
    const data = await blog.findById(id)
    if (!data) return res.status(404).json({ Error: 'Blog Not found' });
    return res.status(200).json({ data: data });
}

const handlePersonalBlog = async (req, res) => {
    try {
        const blogs = await blog.find({ createdBy: req.user.id })
        console.log(blogs)
        if (blogs.length === 0) return res.status(404).json({ error: "User Not created Any blog" })
        return res.status(200).json({ blogdata: blogs })
    } catch (e) {
        return res.status(400).json({ error: "somthing went wrong" });
    }
}

module.exports = {
    handleCreateBlog,
    handleUpdateBlog,
    handleDeleteBlog,
    handleReadAllBlogs,
    handleReadOneBlogs,
    handlePersonalBlog
}