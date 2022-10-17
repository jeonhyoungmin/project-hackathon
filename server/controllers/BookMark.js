const express = require('express');
const connection = require('../utils/database');

const bookmark = (req, res, next) => {
  const id = req.body.id
  const password = req.body.password
  const url = req.body.url
  const memo = req.body.memo
  connection.query('INSERT INTO bookmark (id, password, url, memo) VALUES (?,?,?,?)', [id, password, url, memo], function(err){
      if (err) throw err;
      res.send('입력 완료')
    });
}


module.exports =  bookmark 