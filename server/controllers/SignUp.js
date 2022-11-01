const express = require("express");
const connection = require("../utils/database.js");
const bcrypt = require("bcryptjs");
const session = require("express-session");
// saltRounds 는 모듈화 필요
const saltRounds = 12;

const SignUp = (req, res, next) => {
  const param = [req.body.username, req.body.password, req.body.email];

  if (!param[0] || !param[1] || !param[2]) {
    return res
      .status(404)
      .json({ message: "Please Enter your id or password or email" });
  } else {
    connection.query(
      "SELECT user_id FROM user_info WHERE user_id=?",
      param[0],
      (err, row) => {
        if (row[0])
          return res
            .status(502)
            .json({ message: "Email has already been registered" });
        else {
          console.log(req.session);
          bcrypt.hash(param[1], saltRounds, (error, hash) => {
            param[1] = hash;
            connection.query(
              "INSERT INTO user_info (user_id, user_password, user_email) VALUES (?,?,?)",
              param,
              function (err) {
                if (err) throw err;
                res.status(200).json({ message: "User has been registered" });
              }
            );
            console.log(param);
          });
        }
      }
    );
  }
};

module.exports = SignUp;
