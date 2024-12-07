// 1.0 定义一个函数 接收 父元素 与 子元素们 选择器
function waterFall(parent, childs) {
  // 1.1 获取标签父元素与其中的所有子元素
  const parentEl = document.querySelector(parent)
  const childsEls = document.querySelectorAll(childs)

  // 1.2 获取一个子元素的宽度
  const childElWidth = childsEls[0].offsetWidth

  // 1.3 获取屏幕的宽度 进行兼容判断
  const screenWidth = document.documentElement.clientWidth || document.body.clientWidth
  
  // 1.4 根据上面条件计算出应排版列数
  const cols = ~~(screenWidth / childElWidth)

  console.log(cols) // 1

  // 1.5 给父元素宽度并进行居中
  parentEl.style.width = cols * childElWidth + 'px'
  parentEl.style.margin = '0 auto'

  // 2.0 声明数组 存放每次应该定位的高度 数组长度与列数一致
  const childsElHeightArr = []
  // 2.1 声明三个变量 分别用于保存 数组中最小高度、元素高度与最小索引值
  let minChildElHeight = 0, childElHeight = 0, minIndex = 0

  // 3.0 对所有子元素进行遍历
  childsEls.forEach((item, index) => {
    // 3.1 遍历获取元素的高度
    childElHeight = item.offsetHeight
    
    // 3.2 判断如果列数小于 index 则是第一排元素 添加进数组用于计算高度 
    if (cols > index)  return childsElHeightArr.push(childElHeight)

    // 3.3 否则利用算法金星定位
    // 3.4 计算出数组中的最小高度
    minChildElHeight = Math.min(...childsElHeightArr)
    
    // 3.5 计算数组最小高度所在的索引 这里我封装一个函数 calcMinIndex 即 -> 4.0 
    minIndex = calcMinIndex(childsElHeightArr)

    // 3.6 进行绝对定位
    item.style.position = 'absolute'

    // 3.7 利用最小索引 * 元素宽度 得出子元素据左的距离
    item.style.left = minIndex * childElWidth + 'px'
    
    // 3.8 将每次最小高度赋值给元素的高度
    item.style.top = minChildElHeight + 'px'

    // 3.9 将每次最小高度值与元素高度进行相加
    childsElHeightArr[minIndex] += childElHeight

    // 4.0 封装计算数组最小值的索引
    function calcMinIndex(array) {
      let index = 0
      for (let i = 0; i < array.length; i++){
        if (array[index] > array[i]) index = i
      }
      return index
    }
  })
}

window.addEventListener('load', () => waterFall('#main', '.box'));
window.addEventListener('resize', () => {
  waterFall('#main', '.box')
})

