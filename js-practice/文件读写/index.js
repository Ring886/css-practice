const fs = require('fs');

// 文件名
const fileName = './demo.txt';

// 古诗内容
const poem = `
静夜思
床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。
`;

// 写入文件:   文件名   写入内容 失败的回调
fs.writeFile(fileName, poem, (err) => {
  if (err) {
    console.error('写入文件失败:', err);
    return;
  }
  console.log('古诗写入成功！');

  // 读取文件   文件名     格式      回调函数
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.error('读取文件失败:', err);
      return;
    }
    console.log('读取的内容如下：\n', data);
  });
});