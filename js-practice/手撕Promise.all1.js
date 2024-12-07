function promiseAll(promises) {
  // 返回一个新的Promise
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an iterable.'));
    }

    const results = []; // 用于存储结果
    let completedCount = 0; // 用于计数完成的Promise

    // 遍历传入的Promise数组
    promises.forEach((promise, index) => {
      // 确保处理值是Promise
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value; // 按索引存储结果
          completedCount++;

          // 如果所有Promise都完成，则resolve结果数组
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // 如果有一个Promise失败，则立即reject
          reject(error);
        });
    });

    // 处理空数组情况
    if (promises.length === 0) {
      resolve([]);
    }
  });
}


const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

promiseAll([p1, p2, p3])
  .then((results) => {
    console.log('Results:', results); // 输出: [10, 20, 30]
  })
  .catch((error) => {
    console.error('Error:', error);
  });
