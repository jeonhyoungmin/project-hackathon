const express = require("express");
const {
  registrateaccount,
  registeredaccount,
  deleteaccount,
  updateaccount,
  // registrateaccountsns,
} = require("../controllers/BookMark.js");
const {
  thirdparty,
  thirdpartyaccount,
} = require("../controllers/Thirdparty.js");
const SignUp = require("../controllers/SignUp.js");
const SignIn = require("../controllers/SignIn.js");
const router = express.Router();
const session = require("express-session");
const { request } = require("express");
const FileStore = require("session-file-store")(session);

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)

router.post("/signup", SignUp);

router.post("/signin", SignIn);

router.get("/signout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.status(200).json({ message: "logout" });
  });
});

//서드파티
router.post("/thirdparty", thirdparty);
router.get("/thirdparty", thirdpartyaccount);
// router.post("/bookmarksns", registrateaccountsns)

// 북마크 서비스 계정 등록
router.post("/bookmark", registrateaccount);
// 북마크 등록된 서비스 계정 읽기
router.post("/bookmarkread", registeredaccount);
// 북마크 등록된 서비스 계정 삭제하기
router.delete("/bookmark/:index_bm", deleteaccount);
// 북마크 등록된 서비스 계정 수정하기
router.put("/bookmark", updateaccount);

module.exports = router;
