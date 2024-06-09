const express = require('express')

const postUsecase = require("./routes/post.router")


const app = express()

app.use(express.json())

app.use("/main", postUsecase)


app.get("/", (request, response) => {
    response.json({
        message: "DevTo API"
    })
})


module.exports = app