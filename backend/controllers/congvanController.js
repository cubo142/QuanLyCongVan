const Congvan = require('../models/congvans')
const { mwUploadFile } = require('../middlewares/mwUploadFile');

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
        nguoinhan: req.body.nguoinhan,
        trichyeu: req.body.trichyeu,
        noidung: req.body.noidung,
        file: req.file.buffer,
        fileurl: `files/${req.file.filename}`,
        filename: req.file.originalname,
        trangthai: req.body.trangthai,
        ngaygui: req.body.ngaygui,
        coquanbanhanh: req.body.coquanbanhanh,
        noiluubanchinh: req.body.noiluubanchinh,
        loaicvan: req.body.loaicvan,
        chudecvan: req.body.chudecvan,
        phongban: req.body.phongban,
        linhvuc: req.body.linhvuc,
        kieucvan: req.body.kieucvan
    })
    try {
        const newCongvan = await congvan.save();

        await newCongvan.populate('loaicvan');

        res.status(201).json(newCongvan);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};


//Update 1
const updateCongvan = async (req, res) => {
    const congvan = await Congvan.findById(req.params.id);
    try {
        if (!congvan) {
            return res.status(404).json({ message: 'Congvan not found' });
        }

        // Cập nhật các trường chung
        congvan.kyhieucvan = req.body.kyhieucvan;
        congvan.nguoinhan = req.body.nguoinhan;
        congvan.trichyeu = req.body.trichyeu;
        congvan.noidung = req.body.noidung;
        congvan.trangthai = req.body.trangthai;
        congvan.ngaygui = req.body.ngaygui;
        congvan.coquanbanhanh = req.body.coquanbanhanh;
        congvan.noiluubanchinh = req.body.noiluubanchinh;
        congvan.loaicvan = req.body.loaicvan;
        congvan.chudecvan = req.body.chudecvan;
        congvan.linhvuc = req.body.linhvuc;
        congvan.kieucvan = req.body.kieucvan;

        //Tách chuỗi các ID thành mảng
        //do data req là "id1,id2,id3" => dùng split tách thành [id1,id2,id3]
        congvan.phongban = req.body.phongban;
        const phongbanIds = req.body.phongban.split(',');
        congvan.phongban = phongbanIds;

        // Kiểm tra nếu có file mới được chọn
        if (req.file) {
            congvan.file = req.file.buffer;
            congvan.filename = req.file.originalname;
            congvan.fileurl = `files/${req.file.filename}`;
        }

        const updateCongvan = await congvan.save().populate('loaicvan').populate('chudecvan').populate('phongban').populate('linhvuc');
        res.json(updateCongvan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Delete 1
const deleteCongvan = async (req, res) => {
    const congvan = await Congvan.findById(req.params.id)
    try {
        if (congvan == null) {
            return res.status(404).json({ message: 'Congvan not found' })
        }
        else {
            await congvan.deleteOne()
            res.json({ messasge: 'Delete successful' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get by ID
const getCongvanById = async (req, res) => {
    try {
        const congvan = await Congvan.findById(req.params.id).populate('loaicvan').populate('chudecvan').populate('phongban').populate('linhvuc');
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