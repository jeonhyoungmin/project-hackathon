const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const router = require('./routes/BookMarkRouter')
const connection = require('./utils/database')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})


app.use(router)

connection.connect();


app.listen(port, () => {
  console.log(`${port}에서 서버 대기중`)
})