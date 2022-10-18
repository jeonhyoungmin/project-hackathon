const express = require('express')
const connection = require('./utils/database')
const router = require('./routes/router')

const app = express()
const port = process.env.PORT || 5000;

// 클라이언트로부터 받은 http 요청 메시지 형식에서 body 데이터를 해석하기 위해서 express.json()과 express.urlencoded()로 처리가 필요
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 헤더 지정, 다음 미들웨어가 실행되게 next() 작성
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

// 라우터 작성, routes 폴더에 있는 각 파일의 router를 불러오기
app.use(router)

connection.connect();


app.listen(port, () => {
  console.log(`${port}에서 서버 대기중`)
})