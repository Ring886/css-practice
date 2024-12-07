// Promise
class myPromise {
  constructor (executor){
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.FulfilledArr = []
    this.RejectedArr = []

    const resolve = (value) => {
      if(this.state === 'pending') {
        this.state === 'fulfilled'
        this.value = value
        this.FulfilledArr.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if(this.state === 'pending') {
        this.state === 'rejected'
        this.reason = reason
        this.RejectedArr.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch(e) {
      console.log(e)
    }
  }

  then(Fulfilled, Rejected) {
    if(this.state === 'pending') {
      this.FulfilledArr.push(() => {
        Fulfilled(this.value)
      })
      this.RejectedArr.push(() => {
        Rejected(this.reason)
      })
    }
    if(this.state === 'fulfilled') {
      Fulfilled(this.value)
    }
    if(this.state === 'fulfilled') {
      Fulfilled(this.value)
    }
  }
}

// const myPromise1 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello')
//   }, 1000)
// })

// myPromise1.then(value => {
//   console.log(value)
// })




// 手撕深拷贝
function deepClone(obj) {
  if(obj === null || typeof obj !== Object) return obj
  const clone = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key])
    }
  }
  return clone
}



// 手撕防抖
function debounce(fn, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(fn.apply(this, args), delay)
  }
}


// 手写节流
function throttle(fn, delay) {
  let time = 0
  return function(...args) {
    let now = Date.now()
    if(now - time >= delay) {
      fn.apply(this, args)
      time = now
    }
  }
}


// 提取url参数
function getParams(URL, param) {
  const url = URL.split('?')[1]
  const urlObj = new URLSearchParams(url)
  const params = Object.fromEntries(urlObj.entries())
  return params[param]
}
// let url = 'http://www.taobao.com?a=1&b=2'
// console.log(getParams(url, 'a'))



// 数组扁平化
function fn(arr) {
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
let arr = [1,2,4,[2,3],[1,[1,3,[4,5,6]]],[]]
// console.log(fn(arr))
// console.log(...arr)
console.log([].concat(...arr))
console.log([...arr])




// 树的扁平化
const tree = [
  {
    id: 1,
    name: 'A',
    children: [
      {
        id: 2,
        name: 'B',
        children: [
          { id: 3, name: 'C', children: [] }
        ]
      },
      {
        id: 4,
        name: 'D',
        children: [
          { id: 5, name: 'E', children: [] }
        ]
      }
    ]
  }
];

function flattenTree(tree) {
  const result = [];

  function traverse(node) {
    result.push({ id: node.id, name: node.name }); // 可根据需求保留其他信息
    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
  }

  tree.forEach(rootNode => traverse(rootNode));
  return result;
}

console.log(flattenTree(tree));
