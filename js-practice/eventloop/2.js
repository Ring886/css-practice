async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
  setTimeout(() => {
    console.log('async2 setTimeout')
  }, 0)
}

console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

async1()