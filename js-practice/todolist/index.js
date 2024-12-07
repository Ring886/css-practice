// 获取目标元素
const container = document.getElementById('container');
const h1 = container.querySelector('h1');

function insert(newNode) {
  // 将新节点插入到 h1 的下方
  container.insertBefore(newNode, h1.nextSibling);
}


const btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
  const input = prompt('请输入文本')
  if (input) {
    const newNode = document.createElement('li');
    newNode.style.position = 'relative';
    newNode.textContent = input;

    // 为新创建的 li 绑定点击事件
    newNode.addEventListener('click', () => {
      newNode.style.textDecoration = 'line-through'; // 添加横线
      newNode.style.color = 'gray'; // 改变颜色（可选）
    });

    insert(newNode);
  }
})

// const li = document.getElementsByTagName('li')
// for(let i = 0; i < li.length; i++) {
//   console.log(li)
//   li[i].addEventListener('click', (e) => {
//     li.style = {
//       'text-decoration': 'line-through', /* 添加横线 */
//       'color': 'gray' /* 可选：修改文字颜色 */
//     }
//   })
// }


