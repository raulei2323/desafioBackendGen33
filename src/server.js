const express = require('express')

const postsRouter = require("./routes/posts.router")
const usersRouter = require("./routes/users.router")
const authRouter = require("./routes/auth.router")


const app = express()

app.use(express.json())

app.use("/post", postsRouter)
app.use("/users", usersRouter)
app.use("/auth", authRouter)


app.get("/", (request, response) => {
    response.json({
        message: "DevTo API"
    })
})


module.exports = app