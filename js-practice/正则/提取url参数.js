const url = 'www.taobao.com?username=tanya&password=123'

function getValue(url, key) {
  const params = url.split('?')[1]
  // console.log(arr)
  const regex = /[a-z0-9]+=[a-z0-9]+/gi
  const arr1 = params.match(regex)
  arr1.array.forEach(val => {
    const regex = /[a-z0-9]+/gi
    
  });

}

getValue(url, 'password')