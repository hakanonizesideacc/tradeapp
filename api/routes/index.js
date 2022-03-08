const express = require('express');
const router = express.Router();

const user = require('./user');
const portfolio = require('./portfolio');
const share = require('./share');
const buy = require('../controllers/buy');
const sell = require('../controllers/sell');

router.post('/buy', buy);
router.post('/sell', sell);

router.use('/user', user);
router.use('/portfolio', portfolio);
router.use('/share', share);

module.exports = router;
