const express = require('express');
const router = express.Router();

const {
  addUser,
  fetchAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

router.get('/', fetchAllUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
