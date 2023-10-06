const express = require('express');
const router = express.Router();
const chudecvanController = require('../controllers/chudecvanController')

router.get('/', chudecvanController.getAllChudecvans);
router.get('/:id', chudecvanController.getChudecvanById);
router.post('/', chudecvanController.createChudecvan);
router.patch('/:id', chudecvanController.updateChudecvan);
router.delete('/:id', chudecvanController.deleteChudecvan);

module.exports = router;
