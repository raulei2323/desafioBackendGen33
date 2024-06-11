const express = require ("express")
const postsUsecase = require("../usecases/posts.usecase")
const Users = require("../models/users.model")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()



router.get("/", async (request, response) => {
    try {
        const posts = await postsUsecase.getAll()
        response.json({
            success: true,
            data: { posts }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }

})


router.post("/", auth, async (request, response) => {
    try {
        request.body.user=request.user
        const postCreated = await postsUsecase.create(request.body)
        response.json({
            success: true,
            data: { post: postCreated } 
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.delete("/:id", auth, async (request, response) => {
    try {
        const { id } = request.params
        const { user } = request
        const postDeleted = await postsUsecase.deleteById(id, user)
        response.json({
            success: true,
            data: { post: postDeleted }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
 })

router.patch("/:id", auth, async (request, response) => {
    try {
        const { id } = request.params
        const postUpdated = await postsUsecase.updateById(id, request.body)
        response.json({
            success: true,
            data: { post: postUpdated}
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