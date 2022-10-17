const express = require('express');
const bookmark = require('../controllers/BookMark')
const router = express.Router();

router.post('/bookmark', bookmark)

module.exports = router;