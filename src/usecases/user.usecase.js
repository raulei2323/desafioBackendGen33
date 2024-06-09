const Post = require("../models/userpost.model")

async function createPost(postData) {
    const newPost = await Post.create(postData)
    return newPost
}

async function getAllPost() {
    const allPost = await Post.find()
    return allPost
}

module.exports = {
    create,
    getAll,
}