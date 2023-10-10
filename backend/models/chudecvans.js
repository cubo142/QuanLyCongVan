const mongoose = require('mongoose')

const chudecvanSchema = new mongoose.Schema({
    chudecvan: {
        type: String,
        required: true
    },
})

//mongoose.model("tên model",schema)
module.exports = mongoose.model('Chudecvan', chudecvanSchema);