const WebSocket = require('ws');

// 替换为你的服务器 IP 地址和端口
const ws = new WebSocket('ws://39.102.208.63:5857');

// 连接成功时的回调
ws.on('open', () => {
  console.log('Connected to the server');
  ws.send('撒and撒'); // 向服务器发送消息
});

// 监听来自服务器的消息
ws.on('message', (message) => {
  console.log('Received from server:', message); // 打印接收到的消息
});

// 连接关闭时的回调
ws.on('close', () => {
  console.log('Disconnected from the server');
});