const express = require('express');
const router = express.Router();
const nhanvienController = require('../controllers/nhanvienController')

router.get('/', nhanvienController.getAllNhanviens);
router.get('/:id', nhanvienController.getNhanvienById);
router.post('/', nhanvienController.createNhanvien);
router.patch('/:id', nhanvienController.updateNhanvien);
router.delete('/:id', nhanvienController.deleteNhanvien);


module.exports = router;
