const express = require('express');

const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);

module.exports = router;
