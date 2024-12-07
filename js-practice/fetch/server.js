// 导入必要模块
const express = require('express');
const app = express();
const cors = require('cors')

// 中间件：解析 JSON 请求体
app.use(express.json());
app.use(cors())
// 定义一个简单的 GET 路由
app.get('/api/data', (req, res) => {
  // 返回 JSON 数据
  res.json({
    id: 1,
    name: 'Alice',
    role: 'Developer',
    active: true,
  });
});

// 定义一个 POST 路由（接收请求体）


// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
