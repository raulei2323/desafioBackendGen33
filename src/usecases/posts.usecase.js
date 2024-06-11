const Posts = require("../models/posts.model")

async function create(postData) {
    const newPost = await Posts.create(postData)
    return newPost
}

async function getAll() {
    const allPost = await Posts.find()
    return allPost
}

async function deleteById(id) {
    const postDeleted =  await Posts.findByIdAndDelete(id, user)
    return postDeleted
}

async function updateById(id, newPostData) {
    

    const updatedPost = await Posts.findByIdAndUpdate(id, newPostData, { new: true }) 
    return updatedPost
}

module.exports = {
    create,
    getAll,
    deleteById,
    updateById,
}