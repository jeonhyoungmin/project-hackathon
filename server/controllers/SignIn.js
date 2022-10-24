const express = require('express')
const connection = require('../utils/database.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SignIn = (req, res, next) => {
  const param = [req.body.username, req.body.password]
  // 로그인 유효성 검사

  // 로그인 페이지에서 id 나 password 가 공백일 경우
  if(!param[0] || !param[1]) {
    return res.status(400).json({ message: "Please Enter your id or password" });
  } else {
    connection.query('SELECT user_id, user_password FROM user_info WHERE user_id=?', param[0], (err, row) => {  
      if (err) throw err;
      // 로그인 페이지에서 입력한 id가 DB에 저장된 id가 아닐 경우
      if(!row[0]){
        return res.status(404).json({ message: "You have entered an incorrect ID or password. Please check again." });
      } else {
        // 로그인 페이지에서 입력한 비밀번호와 DB에 단방향 암호화로 저장된 비밀번호를 비교
        bcrypt.compare(param[1], row[0].user_password, (err, compareRes) => {
          // 암호를 비교하는 과정에서 에러가 생긴 경우
          if (err) {
              res.status(502).json({ message: "error while checking user password" });
            // 비교 결과가 동일한 경우 로그인 성공과 함께 토큰 권한 부여
          } else if (compareRes) { // password match
            /* 추후에 토큰 기능 구현 예정 */
            console.log(req.session);
            req.session.isLogined = true;
            req.session.username = req.body.username;
            
            console.log(req.body);

            const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' }); 
            res.status(200).json({ message: "user logged in", "token": token});
            // 비교 결과가 동일하지 않은 경우
          } else { // password doesnt match
              res.status(401).json({ message: "You have entered an incorrect ID or password. Please check again." });
          };
        });
      }
    });
  }
};

module.exports = SignIn;
