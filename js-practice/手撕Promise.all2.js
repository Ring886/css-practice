Promise.myAll = function (promises) {
  let results = [];
  let length = promises.length;
  let promiseCount = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        console.log(`第${i}个Promise`)
        results[i] = res;
        promiseCount++;
        if (promiseCount === length) {
          resolve(results);
        }
      }, err => {
        reject(err);
      })
      setTimeout(() => {
        console.log('延迟')
      }, 1000)
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(20)
    resolve(20)
  }, 2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30)
  }, 3000)
})
Promise.myAll([p1, p2, p3])
  .then((results) => {
    console.log('Results:', results); // 输出: [10, 20, 30]
  }, error => {
    console.error('Error:', error)
  });
