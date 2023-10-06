const mongoose = require('mongoose')

const phongbanSchema = new mongoose.Schema({
    tenphongban: {
        type: String,
        required: true
    },
    truongphong: {
        type: String,
        required: true
    },
    sdtphongban: {
        type: Number,
        required: false
    }
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Phongban',phongbanSchema);