const express = require('express');
const transController = require('./transController');
router = express.Router();

router.route('/transactions').get(transController.getTrans);

module.exports = router;
