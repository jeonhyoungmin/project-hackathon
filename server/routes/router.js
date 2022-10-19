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

// const bcrypt = require('bcryptjs');

// router.get('/signup',async(req,res,next)=>{
//     try{
//         console.log('asdf');
//         let a = "안녕하세요!";
//         let usebcryptjs = await bcrypt.hash(a,12);
//         res.json(usebcryptjs);
//     }catch(error){
//         console.error(error);
//         return next(error);
//     }
// });
// router.get('/signin',async(req,res,next)=>{
//     try{
//         let a = "새로운 문자열";
//         let usebcryptjs = await bcrypt.hash(a,12);
//         let compare = await bcrypt.compare(a,usebcryptjs);
//         res.json(compare);
//     }catch(error){
//         console.error(error);
//         next(error);
//     }
// })

module.exports = router;