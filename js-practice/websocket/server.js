// 导入 WebSocket 模块
const WebSocket = require('ws');

// 创建 WebSocket 服务器，监听端口 8888
const wss = new WebSocket.Server({ port: 8888 });

// 当有客户端连接到 WebSocket 服务器时，触发 'connection' 事件
// wss.on('connection', (ws) => {
//   console.log('客户端连接成功');

//   // 监听客户端发送的消息
//   ws.on('message', (message) => {
//     console.log('收到客户端消息:', message);

//     // 发送消息到客户端
//     ws.send('服务器已收到你的消息：' + message);
//   });

//   // 监听客户端断开连接的事件
//   ws.on('close', () => {
//     console.log('客户端已断开连接');
//   });

//   // 监听错误事件
//   ws.on('error', (error) => {
//     console.error('连接出错:', error);
//   });
// });

console.log('WebSocket 服务器运行在 ws://localhost:8888');
