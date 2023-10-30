const Chudecvan = require('../models/chudecvans')

//Get All
const getAllChudecvans = async (req, res) => {
    try {
        const chudecvans = await Chudecvan.find();
        res.json(chudecvans);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Create 1
const createChudecvan = async (req, res) => {
    const chudecvan = new Chudecvan({
        chudecvan: req.body.chudecvan,
    })
    try {
        const newChudecvan = await chudecvan.save();

        res.status(201).json(newChudecvan);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//Update 1
const updateChudecvan = async (req, res) => {
    const chudecvan = await Chudecvan.findById(req.params.id)
    try {
        if (chudecvan == null) {
            return res.status(404).json({ message: 'Không tìm thấy chủ đề công văn' })
        }
        else {
            //Body nhận data truyền vào
            chudecvan.chudecvan = req.body.chudecvan
            const updateChudecvan = await chudecvan.save()
            res.json(updateChudecvan)
        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Delete 1
const deleteChudecvan = async (req, res) => {
    const chudecvan = await Chudecvan.findById(req.params.id)
    try {
        if (chudecvan == null) {
            return res.status(404).json({ message: 'Không tìm thấy chủ đề công văn' })
        }
        else {
            await chudecvan.deleteOne()
            res.json({ messasge: 'Xóa thành công' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get by ID
const getChudecvanById = async (req, res) => {
    try {
        const chudecvan = await Chudecvan.findById(req.params.id)
        if (chudecvan == null) {
            return res.status(404).json({ message: "Không tìm thấy chủ đề công văn" })
        }
        else {
            return res.json(chudecvan);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllChudecvans,
    getChudecvanById,
    createChudecvan,
    deleteChudecvan,
    updateChudecvan
};