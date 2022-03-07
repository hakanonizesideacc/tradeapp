const express = require('express');
const router = express.Router();

const user = require('./user');
const portfolio = require('./portfolio');

router.get('/buy');
router.get('/sell');

router.use('/user', user);
router.use('/portfolio', portfolio);

module.exports = router;
