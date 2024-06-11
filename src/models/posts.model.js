const mongoose = require('mongoose')
const modelName = "post"

const schema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500,
    },
    cratedAt: {
        type: Date,
        default: Date.now,
    },
    idFromUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    updated_at:{
        type:Date,
        default:Date.now
    },

})


module.exports = mongoose.model(modelName, schema)