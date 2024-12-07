// all：如果都成功，返回 resolve 值的数组
// 只要有一个失败就返回 reject 的值

function myPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    let count = 0
    let len = arr.length
    let result = []
    for(let i = 0; i < arr.length; i++) {
      let p = arr[i]
      Promise.resolve(p)
        .then(val => {
          result[i] = val
          count++
          if(count === len) resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 4000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

myPromiseAll([p1, p2, p3])
  .then(val => {
    console.log(val)
  })
  .catch(err => {
    console.log(err)
  })