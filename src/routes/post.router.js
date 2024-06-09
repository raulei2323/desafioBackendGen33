const express = require ("express")

const postUsecases = require("../usecases/post.usecase")

const router = express.Router()


//Get /post
router.get("/", async (request, response) => {
    try {
        const posts = await postUsecases.getAllPost()
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

// POST /main
router.post("/", async (request, response) => {
    try {
        const postCreated = await postUsecases.createPost(request.body)
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


module.exports = router