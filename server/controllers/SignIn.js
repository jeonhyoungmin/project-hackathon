const express = require('express');
const connection = require('../utils/database');
const bcrypt = require('bcryptjs');


const SignIn = (req, res, next) => {
  param = [req.body.username, req.body.password]
  connection.query('SELECT * FROM user_info WHERE id=?', param[0], (err, row) => {
    if(err) console.log(err)

    if(row.length > 0) {
      bcrypt.compare(param[1], row[0].password, (error, result) => {
        if(result) {
            console.log('로그인 성공');
          }else{
            console.log('로그인 실패');
          }
        })
      // console.log('아이디가 존재합니다.');
    } else {
      console.log('아이디가 존재하지 않습니다.');
    }
  });
  res.end();
};

module.exports = SignIn;
