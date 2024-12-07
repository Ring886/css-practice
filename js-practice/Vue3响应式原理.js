let arr = [1,2,3]

let proxy = new Proxy(arr, {
  get(target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
})

proxy.push(4)