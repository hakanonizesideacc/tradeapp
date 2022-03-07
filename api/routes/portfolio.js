const express = require('express');
const router = express.Router();

const {
  addPortfolio,
  deletePortfolio,
  fetchAllPortfolios,
  getPortfolio,
  updatePortfolio,
} = require('../controllers/portfolio');

router.get('/', fetchAllPortfolios);
router.get('/:id', getPortfolio);
router.post('/', addPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/:id', deletePortfolio);

module.exports = router;
