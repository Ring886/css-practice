// 求长方形面积
function getArea(width, height) {
  return width * height
}
// 如果碰到的长方形宽老是10
const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)


// 使用闭包柯里化这个计算面积的函数
function getArea(width) {
  return height => {    // getArea 返回一个函数，接受参数 height，但这不是返回 height 值吗
    return width * height
  }
}
// 这么写也可以
function getArea(width) {
  return function(height) {
    return width * height
  }
}


const getTenWidthArea = getArea(10)
// 之后碰到宽度为10的长方形就可以这样计算
const area4 = getTenWidthArea(20)
console.log(area4)
// 宽度变化也可以轻松复用
const getTwentyWidthArea = getArea(20)