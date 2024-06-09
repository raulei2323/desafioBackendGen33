const express = require("express")

const usersUsecase = require("../usecases/users.usecase")

const router = express.Router()

router.get("/", async (request, response) => {
    try {
        const users = await usersUsecase.getAll()
        response.json({
            success: true,
            data: { users }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})
 router.post("/", async (request, response) => {
    try {
        const userCreated = await usersUsecase.create(request.body)
        response.json({
            success: true,
            data: { user: userCreated}
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
 })

 router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const user = await usersUsecase.getById(id)
        response.json({
            success: true,
            data: { user: user }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const userDeleted = await usersUsecase.deleteById(id)
        response.json({
            success: true,
            data: { user: userDeleted }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
 })

router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const userUpdated = await usersUsecase.updateById(id, request.body)
        response.json({
            success: true,
            data: { user: userUpdated}
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
 })


module.exports = router
