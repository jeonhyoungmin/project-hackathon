const express = require('express');
const connection = require('../utils/database');

const bookmark = (req, res, next) => {
  // json 형식으로 온 데이터를 정리
  const id = req.body.id
  const password = req.body.password
  const url = req.body.url
  const service = req.body.service
  const memo = req.body.memo

  // SQL query문 작성
  // 매개 변수 1: 쿼리문
  // 매개 변수 2: VALUES의 ?에 들어갈 데이터 배열
  // 매개 변수 3: 콜백 함수(error, rows, fields)
  connection.query('INSERT INTO bookmark (regi_id, regi_password, regi_url, regi_service, regi_memo) VALUES (?,?,?,?,?)', [id, password, url, service, memo], function(err){
      if (err) throw err;
      res.send('입력 완료')
    });
}


module.exports =  bookmark 