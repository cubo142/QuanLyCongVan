const express = require('express')
const router = express.Router()
const Congvan = require('../models/congvans')

//Get all congvans
router.get('/', async (req, res) => {
    try {
        const congvans = await Congvan.find()
        res.json(congvans) //send data cho user
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get 1 congvan by id
router.get('/:id', getCongvan, (req, res) => {
    // Đoạn code trong đây được thực thi sau khi middleware getCongvan đã hoàn thành

    // Trả json body của dữ liệu công văn
    res.send(res.congvan);

    // Hoặc trả về một trường dữ liệu cụ thể của công văn
    // res.send(res.congvan.kyhieucvan);

})

//Create 1 congvan
router.post('/', async (req, res) => {
    const congvan = new Congvan({
        kyhieucvan: req.body.kyhieucvan,
        ngaybanhanh: req.body.ngaybanhanh
    })
    try {
        const newCongvan = await congvan.save()
        res.status(201).json(newCongvan)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Update 1 congvan
router.patch('/:id', getCongvan, async (req, res) => { //PATCH update 1 thông tin, PUT update toàn bộ
    if (req.body.name != null) {
        res.congvan.kyhieucvan = req.body.kyhieucvan
    }
    try {
        const updatedCongvan = await res.Congvan.save()
        res.json(updatedCongvan)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Delete 1 congvan
router.delete('/:id', getCongvan, async (req, res) => {
    try {
        await res.congvan.deleteOne()
        res.json({ message: 'Delete Congvan successful' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Sử dụng middleware lấy data từ id
//Dùng function này để khỏi viết lại các phương thức get cho từng API cần /:id
async function getCongvan(req, res, next) {
    let congvan
    try {
        congvan = await Congvan.findById(req.params.id) //lấy data
        if (congvan == null) {
            return res.status(404).json({ message: "Cannot find congvan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    //gán biến congvan cho response
    res.congvan = congvan
    next()
}

module.exports = router

 //status(201) = đã tạo ra gì đó
 //status(400) = lỗi input phía user