const express = require("express");
const connection = require("../utils/database.js");

// 서드파티 로그인에서 사용자 프로필을 가져와 서버로 전송한다.
const thirdparty = (req, res, next) => {
  const sns_id = req.body.response.id;
  const sns_email = req.body.response.email;

  // 등록할때 IGNORE를 주어 중복등록을 방지한다.
  connection.query(
    `INSERT IGNORE INTO user_info (sns_id,sns_email) VALUES('${sns_id}','${sns_email}')`,
    function (err) {
      if (err) throw err;
      res.send("입력완료");
    }
  );
};

const thirdpartyaccount = (req, res, next) => {
  connection.query("SELECT * FROM bookmark", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = { thirdparty, thirdpartyaccount };
