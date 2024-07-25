const express = require('express');
const router = express.Router();
const metadataController = require('../controllers/metadataController');

router.get('/', metadataController.getAllMetadata);
router.get('/:id', metadataController.getMetadataById);

module.exports = router;