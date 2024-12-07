const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

// 设置一个 GET 路由，服务端设置 cookie
app.get('/set-cookie', (req, res) => {
  // 设置 cookie
  res.cookie('username1', 'JohnDoe', { maxAge: 3600000, httpOnly: false });
  res.send('Cookie has been set!');
});

// 获取 cookie
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;  // 读取 cookie
  if (username) {
    res.send(`Hello, ${username}!`);
  } else {
    res.send('No cookie found');
  }
});

// 使用 express-cookie 中间件解析 cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
