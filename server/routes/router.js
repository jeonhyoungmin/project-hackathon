const express = require("express")
const {
  registrateaccount,
  registeredaccount,
  deleteaccount,
  updateaccount
} = require("../controllers/BookMark.js")
const { thirdparty, thirdpartyaccount } = require("../controllers/Thirdparty.js")
const SignUp = require("../controllers/SignUp.js")
const SignIn = require("../controllers/SignIn.js")
const router = express.Router();

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)

router.post("/signup", SignUp);

router.post("/signin", SignIn);

//서드파티
router.post("/thirdparty", thirdparty);
router.get("/thirdparty", thirdpartyaccount);

// 북마크 서비스 계정 등록
router.post("/bookmark", registrateaccount);
// 북마크 등록된 서비스 계정 읽기
router.get("/bookmark", registeredaccount);
// 북마크 등록된 서비스 계정 삭제하기
router.delete('/bookmark/:index_id', deleteaccount)
// 북마크 등록된 서비스 계정 수정하기
router.put('/bookmark', updateaccount)

module.exports = router;
