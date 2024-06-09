const Users = require("../models/users.model")

async function create(userData) {
    const newUser = await Users.create(userData)
    return newUser
}

async function getAll() {
    const allUsers = await Users.find()
    return allUsers
}

async function getById(id) {
    const user = await Users.findById(id)
    return user
}

async function deleteById(id) {
    const userDeleted =  await Users.findByIdAndDelete(id)
    return userDeleted
}

async function updateById(id, newUserData) {
    const updatedUser = await Users.findByIdAndUpdate(id, newUserData, { new: true }) 
    return updatedUser
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}
