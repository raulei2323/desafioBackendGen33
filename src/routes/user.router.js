const express = require ("express")

const kuserUsecases = require("../usecases/user.usecase")

const router = express.Router()


//Get /post
router.get("/main", async (request, response) => {
    try {
        const posts = await userUsecases.getAllPost()
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
router.post("/main", async (request, response) => {
    try {
        const postCreated = await userUsecasesUsecase.createPost(request.body)
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