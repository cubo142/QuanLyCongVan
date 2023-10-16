const mongoose = require('mongoose')
const Phongban = require('./phongbans')

const nhanvienSchema = new mongoose.Schema({
    tennhanvien: {
        type: String,
        required: true
    },
    phongban:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Phongban'
    },
    email: {
        type: String,
        required: false
    },
    ngayvaolam: {
        type: Date,
        required: true,
        default: Date.now
    },
    sdtnhanvien: {
        type: Number,
        required: false
    },
    diachi: {
        type: String,
        required: false
    }
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Nhanvien', nhanvienSchema)