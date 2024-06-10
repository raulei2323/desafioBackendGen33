const createError = require("http-errors")
const encrypt = require("../lib/encrypt")
const Users = require("../models/users.model")

async function create(userData) {
    const userFound = await Users.findOne({email: userData.email})

    if(userFound) {
        throw createError(409, "Email already in use")
    }

    const password = await encrypt.encrypt(userData.password)
    userData.password = password

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
    const userFound = await Users.findOne({email: newUserData.email})

    if(userFound) {
        throw createError(409, "Email already in use")
    }
    const password = await encrypt.encrypt(newUserData.password)
    newUserData.password = password

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
