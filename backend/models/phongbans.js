const mongoose = require('mongoose')

const phongbanSchema = new mongoose.Schema({
    tenphongban: {
        type: String,
        required: true
    },
    truongphong: {
        type: String,
        required: false
    },
    sdtphongban: {
        type: Number,
        required: false
    }
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Phongban',phongbanSchema);