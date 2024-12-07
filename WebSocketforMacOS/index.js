function Connect() {
  const ws = new WebSocket('ws://39.102.208.63:5857');

  ws.onopen = () => {
    console.log('Connected to the server');
    ws.send("hello iPhone! I'm mac!");
    console.log('发送成功')
  };

  ws.onmessage = (event) => {
    console.log('Message from server:', event.data);
    const text = document.querySelector('textarea')
    text.innerHTML = event.data
  };

  ws.onclose = () => {
    console.log('Connection closed');
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
}