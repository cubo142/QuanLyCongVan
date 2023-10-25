const mongoose = require('mongoose')
const Loaicvan = require('./loaicvans')
const Chudecvan = require('./chudecvans')
const Phongban = require('./phongbans')
const Linhvuc = require('./linhvucs')

const congvanSchema = new mongoose.Schema({
    loaicvan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Loaicvan'
    },
    chudecvan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chudecvan'
    },
    phongban:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Phongban'
    },
    linhvuc:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Linhvuc'
    },
    kyhieucvan: {
        type: String,
        required: false
    },
    ngaybanhanh: {
        type: Date,
        required: false,
        default: Date.now
    },
    ngayhethieuluc: {
        type: Date,
        required: false,
        default: Date.now
    },
    nguoinhan: {
        type: String,
        required: false
    },
    trichyeu: {
        type: String,
        required: false
    },
    noidung: {
        type: String,
        required: false
    },
    trangthai: {
        type: Number,
        required: false
    },
    ngaygui: {
        type: Date,
        required: false,
        default: Date.now
    },
    coquanbanhanh: {
        type: String,
        required: false
    },
    noiluubanchinh: {
        type: String,
        require: false
    },
    loaicvan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loaicvan'
    },
    chudecvan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chudecvan'
    },
    phongban: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phongban'
    },
    linhvuc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Linhvuc'
    },
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Congvan', congvanSchema)