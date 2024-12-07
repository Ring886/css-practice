function fn(arr1, arr2) {
  let set = new Set()
  let arr = []
  for(const val of arr1) {
    set.add(val)
  }
  for(const val of arr2) {
    if(set.has(val)) {
      arr.push(val)
    }
  }
  return arr
}

const arr1 = [1,2,3,4]
const arr2 = [2,3,4,5]
console.log(fn(arr1, arr2))