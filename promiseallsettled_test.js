// allSettled：返回一个数组，包括所有的 Promise 状态
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'rejected', reason: 3 }
// ]

function myPromiseAllSettled(arr) {
  return new Promise((resolve, reject) => {
    let count = 0
    let len = arr.length
    let result = []
    for(let i = 0; i < len; i++) {
      const p = arr[i]
      Promise.resolve(p)
        .then(value => {
          const obj = {
            status: 'fulfilled',
            value: value
          }
          count++
          result[i] = obj
          if(count === len) resolve(result)
        })
        .catch(err => {
          const obj = {
            status: 'rejected',
            reason: err
          }
          count++
          result[i] = obj
          if(count === len) resolve(result)
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
    reject(3)
  }, 3000)
})

myPromiseAllSettled([p1, p2, p3])
  .then(val => {
    console.log(val)
  })
  .catch(err => {
    console.log(err)
  })

// Promise.allSettled([p1, p2, p3])
//   .then(val => {
//     console.log(val)
//   })
//   .catch(err => {
//     console.log(err)
//   })