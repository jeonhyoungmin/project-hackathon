import express from 'express'
import connection from '../utils/database.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SignIn = (req, res, next) => {
  const param = [req.body.username, req.body.password]
  
  if(!param[0] || !param[1]) {
    return res.status(400).json({ message: "Please Enter your id or password" });
  } else {
    connection.query('SELECT user_id, user_password FROM user_info WHERE user_id=?', param[0], (err, row) => {
      console.log(row)
      if(!row[0]){
        return res.status(404).json({ message: "You have entered an incorrect ID or password. Please check again." });
      } else {
        // password hash
        bcrypt.compare(param[1], row[0].user_password, (err, compareRes) => {
          if (err) { // error while comparing
              res.status(502).json({ message: "error while checking user password" });
          } else if (compareRes) { // password match
              const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
              res.status(200).json({ message: "user logged in", "token": token});
          } else { // password doesnt match
              res.status(401).json({ message: "invalid credentials" });
          };
        });
      }
    });
  }
};

export default SignIn;
