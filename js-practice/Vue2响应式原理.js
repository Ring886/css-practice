let obj = {}
// 数据描述符
Object.defineProperty(obj, 'key', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})

console.log('obj 对象为', obj)


let obj1 = {}
let value = '旧值'

// 数据描述符
Object.defineProperty(obj1, 'key', {
  get: function() {
    console.log('执行获取操作')
    return value + '123'
  },
  set: function(newValue) {
    console.log('执行设置操作')
    value = newValue
  }
})

console.log(obj1.key)
obj1.key = '新值'
console.log(obj1.key) // 打印的东西就是 get 函数最后 return 的那个值

