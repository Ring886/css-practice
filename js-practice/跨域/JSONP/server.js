const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const callback = req.query.callback; // 获取回调函数名
  const data = { name: 'John Doe', age: 30, city: 'New York' }; // 模拟数据

  if (callback) {
    // 包装数据到回调函数中
    const jsonpData = `${callback}(${JSON.stringify(data)})`;
    res.type('application/javascript'); // 设置 Content-Type 为 JS
    res.send(jsonpData);
  } else {
    res.status(400).send('Callback parameter is required.');
  }
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
