const express = require('express');
const connection = require('../utils/database');
const bcrypt = require('bcryptjs');
// saltRounds 는 모듈화 필요
const saltRounds = 12;

const SignUp = (req, res, next) => {
  const param = [req.body.username, req.body.password, req.body.email]
  // const id = req.body.username
  // const password = req.body.password
  // const email = req.body.email
  bcrypt.hash(param[1], saltRounds, (error, hash) => {
    param[1] = hash
    connection.query('INSERT INTO user_info (user_id, user_password, user_email) VALUES (?,?,?)', param, function(err){
      if (err) throw err;
      res.send('입력 완료');
    });
    console.log(param);
  })
}

  // connection.query('INSERT INTO user_info (user_id, user_password, user_email) VALUES (?,?,?)', [id, password, email], function(err){
  //   if (err) throw err;
  //   res.send('입력 완료')
  // });


  
  
  // // json 형식으로 온 데이터를 정리
  // const id = req.body.username
  // const password = req.body.password
  // const email = req.body.email
  // // SQL query문 작성
  // console.log(req.body)
  // connection.query('INSERT INTO user_info (user_id, user_password, user_email) VALUES (?,?,?)', [id, password, email], function(err){
  //   if (err) throw err;
  //   res.send('입력 완료')
  // });

module.exports = SignUp;