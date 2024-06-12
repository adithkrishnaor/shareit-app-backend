const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        "name":String,
        "username":String,
        "image":String,
        "caption":String
    }
)

let postmodel = mongoose.model("posts",schema)
module.exports = {postmodel} 