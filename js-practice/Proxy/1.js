function createSecureProxy(obj, user) {
  return new Proxy(obj, {
    get(obj, key) {
      if(user === 'admin') {
        console.log(`User: ${user}, Action: GET, Property: ${key}, Result: ${obj[key]}`)
        return obj[key]
      } else {
        console.log(`[LOG] User: ${user}, Action: GET, Property: ${key}, Result: undefined`)
      }
    },
    set(obj, key, newValue) {
      if(user === 'admin') {
        obj[key] = newValue
        console.log(`[LOG] User: ${user}, Action: SET, Property: ${key}, New Value: ${obj[key]}`)
      } else {
        console.log(`[LOG] User: ${user}, Action: SET, Property: ${key}, Error: Permission denied`)
      }
    },
  })
}

const data = { name: "Alice", age: 25, role: "developer" };
const currentUser = "admin"; // 或 "admin"
const proxy = createSecureProxy(data, currentUser);

console.log(proxy.name); // 读取属性
proxy.age = 30; // 修改属性

// [LOG] User: guest, Action: GET, Property: name, Result: undefined
// [LOG] User: guest, Action: SET, Property: age, Error: Permission denied

// [LOG] User: admin, Action: GET, Property: name, Result: Alice
// [LOG] User: admin, Action: SET, Property: age, New Value: 30

