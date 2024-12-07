class myPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.FulfilledArr = []
    this.RejectedArr = []

    const resolve = (value) => {
      if(this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.FulfilledArr.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if(this.state === 'pending') {
        this.state = 'rejected'
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
      this.FulfilledArr.push(() => Fulfilled(this.value))
      this.RejectedArr.push(() => Rejected(this.value))
    }
    if(this.state === 'fulfilled') {
      Fulfilled(this.value)
    }
    if(this.state === 'rejected') {
      Rejected(this.reason)
    }
  }

  all(...args) {
    for(const a in args) {
      
    }
  }
}


let a = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

a.then(val => {
  console.log(val)
})