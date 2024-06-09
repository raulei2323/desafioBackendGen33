const express = require('express')

const postUsecase = require("./routes/post.router")
const usersUsecase = require("./routes/users.router")


const app = express()

app.use(express.json())

app.use("/main", postUsecase)
app.use("/users", usersUsecase)


app.get("/", (request, response) => {
    response.json({
        message: "DevTo API"
    })
})


module.exports = app