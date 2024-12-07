setTimeout(() => {
  console.log('first setTimeout')
}, 0)

Promise.resolve('first Promise').then(val => {
  console.log(val)
})

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(p.state)
    resolve('second Promise')
    console.log(p.state)
  }, 1000)
})
p.then(val => {
  console.log(val)  
})