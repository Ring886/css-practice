class myPromise {
  constructor(executor) {
    this.state = 'pending'
    this.reason = undefined
    this.val = undefined
    this.fulfilledArr = []
    this.RejectedArr = []


    const resolve = (val) => {
      if(this.state === 'pending') {    // 这个别忘了
        this.state = 'fulfilled'
        this.val = val
        this.fulfilledArr.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if(this.state === 'pending') {    // 这个别忘了
        this.state = 'rejected'
        this.reason = reason
        this.RejectedArr.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)  
    } catch(e) {
      console.log('发生错误:' + e);
    }
  }

  then(Fulfilled, Rejected) {
    // 如果 Promise里面是同步操作，那这个就可以注释掉，因为在上面的 resolve 中已经把状态改为 fulfilled
    if(this.state === 'pending') {      
      this.fulfilledArr.push(() => {
        Fulfilled(this.val)
      })
      this.RejectedArr.push(() => {
        Rejected(this.reason)
      })
    }
    // 下面两种主要是应付 Promise内部是同步操作,比如没有setTimeout 这种情况
    if(this.state === 'fulfilled') {
      Fulfilled(this.val)
    }
    if(this.state === 'rejected') {
      Rejected(this.val)
    }
  }
}

const myPromise1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('我竟然手撕成功了!')
  }, 1000)
})

myPromise1.then(val => {
  console.log(val);
}, reason => {
  console.log(reason);
})