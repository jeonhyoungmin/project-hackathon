const { Router } = require("express");
const express = require("express");
const connection = require("../utils/database.js");

// 북마크 서비스 계정 등록
const registrateaccount = (req, res, next) => {
  // console.log(req)
  // json 형식으로 온 데이터를 정리

  const id = req.body.id;
  const password = req.body.password;
  const url = req.body.url;
  const service = req.body.service;
  const memo = req.body.memo;
  const sns_id = req.body.storage;

  // const sns_id = req.body.response.id;

  // 북마크 등록할때 사용하는 SQL문
  const bookmarkSql = `INSERT INTO bookmark (regi_id,regi_password, regi_url, regi_service, regi_memo, index_user) SELECT '${id}','${password}','${url}','${service}','${memo}', index_user FROM user_info WHERE sns_id="${sns_id}"`;

  // SQL query문 작성
  // 매개 변수 1: 쿼리문
  // 매개 변수 2: VALUES의 ?에 들어갈 데이터 배열
  // 매개 변수 3: 콜백 함수(error, rows, fields)
  connection.query(bookmarkSql, function (err) {
    if (err) throw err;
    res.status(200).json({ message: "success" });
  });
};

// 북마크 등록된 서비스 계정 읽기
const registeredaccount = (req, res, next) => {
  connection.query("SELECT * FROM bookmark", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

// 북마크 등록된 서비스 계정 삭제
const deleteaccount = (req, res, next) => {
  console.log(req.params.index_id);
  const index_id = req.params.index_id;
  connection.query(
    "DELETE FROM bookmark WHERE index_id = ?",
    index_id,
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

  connection.query(
    "UPDATE bookmark SET regi_id = ?, regi_password = ?, regi_service = ?, regi_memo = ? WHERE index_id = ?",
    [id, password, service, memo, index],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

module.exports = {
  registrateaccount,
  registeredaccount,
  deleteaccount,
  updateaccount,
};
