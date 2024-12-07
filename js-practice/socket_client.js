const net = require('net');

// 创建一个 TCP 客户端连接到服务器
const client = new net.Socket();
client.connect(5000, '39.102.208.63', () => {
  console.log('已连接到服务器');
  
  // 向服务器发送数据
  client.write('Hello from client');
});

// 监听服务器返回的数据
client.on('data', (data) => {
  console.log(`服务器回复: ${data.toString()}`);
  
  // 客户端接收到数据后关闭连接
  client.destroy();
});

// 监听连接关闭
client.on('close', () => {
  console.log('连接关闭');
});
