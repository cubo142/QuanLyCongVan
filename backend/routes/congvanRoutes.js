const express = require('express');
const router = express.Router();
const congvanController = require('../controllers/congvanController');
const { mwUploadFile } = require('../middlewares/mwUploadFile');

router.get('/', congvanController.getAllCongvans);
router.get('/:id', congvanController.getCongvanById);
router.post('/',mwUploadFile, congvanController.createCongvan);
router.patch('/:id', congvanController.updateCongvan);
router.delete('/:id', congvanController.deleteCongvan);


module.exports = router;
