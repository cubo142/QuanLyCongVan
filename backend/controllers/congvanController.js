const Congvan = require('../models/congvans')

//Get All
const getAllCongvans = async (req, res) => {
    try {
        const congvans = await Congvan.find().populate('loaicvan').populate('chudecvan').populate('phongban').populate('linhvuc');
        res.json(congvans);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Create 1
const createCongvan = async (req, res) => {
    const congvan = new Congvan({
        kyhieucvan: req.body.kyhieucvan,
        ngaybanhanh: req.body.ngaybanhanh,
        ngayhethieuluc: req.body.ngayhethieuluc,
        nguoinhan: req.body.nguoinhan,
        trichyeu: req.body.trichyeu,
        noidung: req.body.noidung,
        file: req.body.file,
        trangthai: req.body.trangthai,
        ngaygui: req.body.ngaygui,
        coquanbanhanh: req.body.coquanbanhanh,
        noiluubanchinh: req.body.noiluubanchinh,
        loaicvan: req.body.loaicvan,
        chudecvan: req.body.chudecvan,
        phongban: req.body.phongban,
        linhvuc: req.body.linhvuc,
    })
    try {
        const newCongvan = await congvan.save();

        await newCongvan.populate('loaicvan');

        res.status(201).json(newCongvan);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//Update 1
const updateCongvan = async (req, res) => {
    const congvan = await Congvan.findById(req.params.id)
    try {
        if (congvan == null) {
            return res.status(404).json({ message: 'Congvan not found' })
        }
        else {
            //Body nhận data truyền vào
            res.congvan.kyhieucvan = req.body.kyhieucvan
            res.congvan.ngaybanhanh = req.body.ngaybanhanh
            res.congvan.ngayhethieuluc = req.body.ngayhethieuluc
            res.congvan.nguoinhan = req.body.nguoinhan
            res.congvan.trichyeu = req.body.trichyeu
            res.congvan.noidung = req.body.noidung
            res.congvan.file = req.body.file
            res.congvan.trangthai = req.body.trangthai
            res.congvan.ngaygui = req.body.ngaygui
            res.congvan.coquanbanhanh = req.body.coquanbanhanh
            res.congvan.noiluubanchinh = req.body.noiluubanchinh
            res.congvan.loaicvan = req.body.loaicvan
            res.congvan.chudecvan = req.body.chudecvan
            res.congvan.phongban = req.body.phongban
            res.congvan.linhvuc = req.body.linhvuc
            const updateCongvan = await res.congvan.save()
            res.json(updateCongvan)
        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Delete 1
const deleteCongvan = async (req, res) => {
    const congvan = await Congvan.findById(req.params.id)
    try {
        if (congvan == null) {
            return res.status(404).json({ message: 'Congvan not found' })
        }
        else {
            await res.congvan.deleteOne()
            res.json({ messasge: 'Delete successful' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get by ID
const getCongvanById = async (req, res) => {
    try {
        const congvan = await Congvan.findById(req.params.id)
        if (congvan == null) {
            return res.status(404).json({ message: "Cannot find congvan" })
        }
        else {
            return res.json(congvan);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllCongvans,
    getCongvanById,
    createCongvan,
    deleteCongvan,
    updateCongvan
};