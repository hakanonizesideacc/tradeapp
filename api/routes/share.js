const express = require('express');
const router = express.Router();

const {
  addShare,
  deleteShare,
  fetchAllShares,
  getShare,
  updateShare,
} = require('../controllers/share');

router.get('/', fetchAllShares);
router.get('/:id', getShare);
router.post('/', addShare);
router.put('/:id', updateShare);
router.delete('/:id', deleteShare);

module.exports = router;
