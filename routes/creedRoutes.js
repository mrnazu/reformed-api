// routes/creedRoutes.js

const express = require('express');
const router = express.Router();
const creedController = require('../controllers/creedController');

router.get('/', creedController.getAllCreeds);
router.get('/:id', creedController.getCreedById);

module.exports = router;