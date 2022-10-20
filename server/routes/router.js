const express = require("express");
const bookmark = require("../controllers/BookMark");
const thirdparty = require("../controllers/Thirdparty");
const router = express.Router();


const SignUp = require('../controllers/SignUp');
const SignIn = require('../controllers/SignIn');

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)
router.post('/bookmark', bookmark);

router.post('/signup', SignUp);

router.post('/signin', SignIn);

router.post('/thirdparty', thirdparty);

module.exports = router;
