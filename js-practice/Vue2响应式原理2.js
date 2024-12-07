let obj = {
  name: 'tanya',
  age: '45',
  job: {
    code: 'FE'
  }
}

function defineProperty(obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    get() {
      // 读取方法
      console.log('读取', key, '成功')
      return val
    },
    set(newVal) {
      console.log('新值', newVal)
      if(newVal === val) return
      observer(newVal)
      console.log('监听设置成功', newVal)
      val = newVal
    }
  })
}

function observer(obj) {
  if(typeof obj !== 'object' || obj == null) return 
  for(const key in obj) {
    defineProperty(obj, key, obj[key])
  }
}

observer(obj)

obj.name = 'amnesia'