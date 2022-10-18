const express = require('express');
const bookmark = require('../controllers/BookMark');
const SignUp = require('../controllers/SignUp');
const SignIn = require('../controllers/SignIn');
const SignOut = require('../controllers/SignOut');
const router = express.Router();

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)
router.post('/bookmark', bookmark);

router.post('/signup', SignUp);

router.post('/signin', SignIn);

module.exports = router;