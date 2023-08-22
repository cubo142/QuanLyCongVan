const mongoose = require('mongoose')

const congvanSchema = new mongoose.Schema({
    kyhieucvan: {
        type: String,
        required: true
    },
    ngaybanhanh: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Congvan', congvanSchema)