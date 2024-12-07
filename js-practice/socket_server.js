const net = require('net');

// 创建一个 TCP 服务器
const server = net.createServer((socket) => {
  console.log('客户端连接成功');

  // 监听客户端发送的数据
  socket.on('data', (data) => {
    console.log(`收到客户端数据: ${data.toString()}`);
    
    // 回复客户端
    socket.write('Hello from server');
  });

  // 处理客户端断开连接
  socket.on('end', () => {
    console.log('客户端断开连接');
  });
});

// 设置服务器端口和主机
server.listen(5000, () => {
  console.log('服务器启动');
});
