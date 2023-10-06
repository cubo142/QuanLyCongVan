const Nhanvien = require('../models/nhanviens')

//Get All
const getAllNhanviens = async (req, res) => {
    try {
        const nhanviens = await nhanvien.find().populate('phongban');
        res.json(nhanviens);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}



//Create 1
const createNhanvien = async (req, res) => {
    const nhanvien = new Nhanvien({
        tennhanvien: req.body.tennhanvien,
        email: req.body.email,
        ngayvaolam: req.body.ngayvaolam,
        sdtnhanvien: req.body.sdtnhanvien,
        diachi: req.body.diachi,
        phongban: req.body.phongban
        
    })
    try {
        const newNhanvien = await nhanvien.save();

        await newNhanvien.populate('phongban');

        res.status(201).json(newNhanvien);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//Update 1
const updateNhanvien = async (req, res) => {
    const nhanvien = await nhanvien.findById(req.params.id)
    try {
        if (nhanvien == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhân viên' })
        }
        else {
            //Body nhận data truyền vào
            res.nhanvien.tennhanvien = req.body.tennhanvien
            res.nhanvien.email = req.body.email
            res.nhanvien.ngayvaolam = req.body.ngayvaolam
            res.nhanvien.sdtnhanvien = req.body.sdtnhanvien
            res.nhanvien.diachi = req.body.diachi
            
            const updateNhanvien = await res.nhanvien.save()
            res.json(updateNhanvien)
        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Delete 1
const deleteNhanvien = async (req, res) => {
    const nhanvien = await Nhanvien.findById(req.params.id)
    try {
        if (nhanvien == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhân viên' })
        }
        else {
            await res.nhanvien.deleteOne()
            res.json({ messasge: 'Xóa thành công' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get by ID
const getNhanvienById = async (req, res) => {
    try {
        const nhanvien = await Nhanvien.findById(req.params.id)
        if (nhanvien == null) {
            return res.status(404).json({ message: "Không tìm thấy nhân viên" })
        }
        else {
            return res.json(nhanvien);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllNhanviens,
    getNhanvienById,
    createNhanvien,
    deleteNhanvien,
    updateNhanvien
};