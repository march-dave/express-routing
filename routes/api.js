'use strict';

var express = require('express');
var router = express.Router();

// api router
// root: /api

// /api/clogs
// router.use('/clogs', require('./clogs'));
// router.use('/users', require('./users'));
router.use('/cars', require('./cars'));

module.exports = router;
