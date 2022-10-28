const express = require("express");
const connection = require("../utils/database.js");

// 서드파티 로그인에서 사용자 프로필을 가져와 서버로 전송한다.
const thirdparty = (req, res, next) => {
  const sns_id = req.body.response.id;
  const sns_email = req.body.response.email;

  // 등록할때 SQL문에서 조건으로 NOT EXISTS를 사용하여 중복시에는 등록을 무시하고, 중복이 아닐시 데이터가 등록되도록 설정
  connection.query(
    `INSERT INTO user_info(sns_id,sns_email) SELECT '${sns_id}','${sns_email}'FROM DUAL WHERE NOT EXISTS (SELECT *  FROM user_info WHERE sns_id='${sns_id}')`,
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
