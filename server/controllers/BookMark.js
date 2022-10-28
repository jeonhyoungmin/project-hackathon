const { Router } = require("express");
const express = require("express");
const connection = require("../utils/database.js");

// 북마크 서비스 계정 등록
const registrateaccount = (req, res, next) => {
  if (req.session.username) {
    console.log(req);
    // console.log(req)
    // json 형식으로 온 데이터를 정리
    const id = req.body.id;
    const password = req.body.password;
    const url = req.body.url;
    const service = req.body.service;
    const memo = req.body.memo;
    const toggle = req.body.toggle;
    const username = req.session.username;

    console.log(req.session);
    console.log(req.session.username);
    // SQL query문 작성
    // 매개 변수 1: 쿼리문
    // 매개 변수 2: VALUES의 ?에 들어갈 데이터 배열
    // 매개 변수 3: 콜백 함수(error, rows, fields)
    // 북마크 등록할때 사용하는 SQL문
    connection.query(
      `INSERT INTO bookmark (index_user, regi_id, regi_password, regi_url, regi_service, regi_memo,regi_toggle) VALUES ( (SELECT index_user FROM user_info WHERE user_id = '${username}'), '${id}','${password}','${url}','${service}','${memo}','${toggle}')`,
      function (err) {
        if (err) throw err;
        res.status(200).json({ message: "success" });
      }
    );
  } else {
    const id = req.body.id;
    const password = req.body.password;
    const url = req.body.url;
    const service = req.body.service;
    const memo = req.body.memo;
    const toggle = req.body.toggle;
    const sns_id = req.body.storage;
    // const sns_id = req.body.response.id;
    const bookmarkSql = `INSERT INTO bookmark (regi_id,regi_password, regi_url, regi_service, regi_memo, regi_toggle, index_user) SELECT '${id}','${password}','${url}','${service}','${memo}','${toggle}', index_user FROM user_info WHERE sns_id="${sns_id}"`;
    connection.query(bookmarkSql, function (err) {
      if (err) throw err;
      res.status(200).json({ message: "success" });
    });
  }
};

// 소셜 로그인 사용자의 북마크 서비스 계정 등록
// const registrateaccountsns = (req, res, next) => {
//   const id = req.body.id;
//   const password = req.body.password;
//   const url = req.body.url;
//   const service = req.body.service;
//   const memo = req.body.memo;
//   const sns_id = req.body.storage;
//   // const sns_id = req.body.response.id;
//   const bookmarkSql = `INSERT INTO bookmark (regi_id,regi_password, regi_url, regi_service, regi_memo, index_user) SELECT '${id}','${password}','${url}','${service}','${memo}', index_user FROM user_info WHERE sns_id="${sns_id}"`;
//   connection.query(bookmarkSql, function (err) {
//     if (err) throw err;
//     res.status(200).json({ message: "success" });
//   });
// }

// 북마크 등록된 서비스 계정 읽기
const registeredaccount = (req, res, next) => {
  if (req.session.username) {
    const username = req.session.username;
    connection.query(
      "SELECT * FROM bookmark WHERE index_user = (SELECT index_user FROM user_info WHERE user_id=?)",
      username,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  } else if (!req.session.username) {
    console.log(req.body);
    const sns_id = req.body.storage;
    connection.query(
      `SELECT * FROM bookmark WHERE index_user = (SELECT index_user FROM user_info WHERE sns_id='${sns_id}')`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  } else {
    console.log("warning");
  }
};

// 북마크 등록된 서비스 계정 삭제
const deleteaccount = (req, res, next) => {
  console.log(req.params.index_bm);
  const index_bm = req.params.index_bm;
  connection.query(
    "DELETE FROM bookmark WHERE index_bm = ?",
    index_bm,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

// 북마크 등록된 서비스 계정 수정
const updateaccount = (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  const password = req.body.password;
  const url = req.body.url;
  const service = req.body.service;
  const memo = req.body.memo;
  const index = req.body.index;
  const toggle = req.body.toggle;

  connection.query(
    `UPDATE bookmark SET regi_id = '${id}', regi_password = '${password}', regi_service = '${service}', regi_memo = '${memo}', regi_toggle = '${toggle}' WHERE index_bm = '${index}'`,

    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

module.exports = {
  registrateaccount,
  // registrateaccountsns,
  registeredaccount,
  deleteaccount,
  updateaccount,
};
