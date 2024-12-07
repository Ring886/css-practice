// race：返回第一个 resolve 或 reject 的 Promise对象

function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < arr.length; i++) {
      const p = arr[i]
      Promise.resolve(p)
        .then(value => {
          resolve(value)
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
    reject(3)
  }, 3000)
})

myPromiseRace([p1, p2, p3])
  .then(value => {
    console.log(value)
  })
  .catch(err => {
    console.log(err)
  })

// Promise.race([p1, p2, p3]) 
//   .then(value => {
//     console.log(value)
//   })
//   .catch(err => {
//     console.log(err)
//   })