const blog = require('../Modal/Blogmodal')

const handleCreateBlog = async (req, res) => {
    try {
        if (!req.body) return res.status(400).json({ error: "Body is required" });
        const result = await blog.create({
            title: req.body.title,
            body: req.body.content,
            coverPhoto: req.file.filename,
            createdBy: req.user.id
        })

        return res.status(201).json({
            result: result
        })
    } catch (e) {
        return res.status(400).json({ error: "somthing went wrong" });
    }
}

const handleUpdateBlog = (req, res) => {
    // code to update a blog
}

const handleDeleteBlog = (req, res) => {
    // code to deltetetheblog but not from data base
}

const handleReadBlogs = (req, res) => {
    // code to read the blogs with some filters 
}

module.exports = {
    handleCreateBlog,
    handleUpdateBlog,
    handleDeleteBlog,
    handleReadBlogs
}