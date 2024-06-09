const express = require('express')

const userUsecase = require("./routes/user.router")


const app = express()

app.use(express.json())

app.use("/main", userUsecase)


app.get("/", (request, response) => {
    response.json({
        message: "DevTo API"
    })
})


module.exports = app