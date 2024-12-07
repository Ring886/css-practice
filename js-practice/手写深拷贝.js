function deepClone(obj) {
  if(obj === null || typeof obj != Object) return obj
  const clone = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key])
    }
  }
  return clone
}

const arr1 = {
  name: 'tanya',
  age: 49,
  nationality: ['Singapore', 'China']
}

const arr2 = deepClone(arr1)
console.log(arr2);



// 浅拷贝
const fxArr = ["One", "Two", "Three", {a:1}]
const fxArrs = fxArr.slice(0)
fxArrs[1] = "love";
fxArrs[3].a = 2;
console.log(fxArr)
console.log(fxArrs)


const obj1 = {a:1, b:{c:1}}
const obj2 = Object.assign({}, obj1)
obj2.a = 2
obj2.b.c = 2
console.log(obj1) // { a: 1, b: { c: 2 } }
console.log(obj2) // { a: 2, b: { c: 2 } }
