const mongoose = require('mongoose')
const modelName = "post"

const schema = new mongoose.Schema({
    cratedAt: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model(modelName, schema)