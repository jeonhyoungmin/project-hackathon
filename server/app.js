import http from 'http'
import fs from 'fs/promises'

http.createServer(async (request, response) => {
  try {
    const data = await fs.readFile('../mobile/App.js');
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    response.end(data);
  } catch (err) {
    console.error(err);
    response.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'})
    response.end(err.message);
  }
})
.listen(5000, () => {
  console.log('5000 포트에서 서버 대기 중');
});