const express = require('express')

const postRouter = require("./routes/post.router")
const usersRouter = require("./routes/users.router")
const authRouter = require("./routes/auth.router")


const app = express()

app.use(express.json())

app.use("/main", postRouter)
app.use("/users", usersRouter)
app.use("/auth", authRouter)


app.get("/", (request, response) => {
    response.json({
        message: "DevTo API"
    })
})


module.exports = app