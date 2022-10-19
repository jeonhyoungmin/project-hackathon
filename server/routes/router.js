const express = require("express");
const bookmark = require("../controllers/BookMark");
const thirdparty = require("../controllers/Thirdparty");
const router = express.Router();

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)
router.post("/bookmark", bookmark);
router.post("/thirdparty", thirdparty);

module.exports = router;
