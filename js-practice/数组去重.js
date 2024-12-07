const arr = [1,2,3,4,5,1,2,4]

function fn1(arr) {
  const newArr = arr.filter((value, index) => {
    return arr.indexOf(value) === index
  })
  return newArr
}

function fn2(arr) {
  const set = new Set()
  const newArr = []
  arr.forEach((value, index) => {
    if(!set.has(value)) {
      set.add(value)
      newArr.push(value)
    }
  })
  return newArr
}

function fn3(arr) {

}

console.log(fn1(arr))
console.log(fn2(arr))