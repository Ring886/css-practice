// 优化前代码：
const url = 'https://example.com'
fetch(`{url}/1`)
  .then(response => response.json())
  .then(json => json.data)
  .then(data => console.log(`${data.name}`))

fetch(`{url}/2`)
  .then(response => response.json())
  .then(json => json.data)
  .then(data => console.log(`${data.name}`))

fetch(`{url}/3`)
  .then(response => response.json())
  .then(json => json.data)
  .then(data => console.log(`${data.name}`))



  
// 优化后的代码
let bb = async() => {
  const url = 'https://example.com'
  try {
    let responses = await Promise.all(
      [fetch(`${url}/1`), fetch(`${url}/2`), fetch(`${url}/3`)]
    )
    let jsons = responses.map(response => response.json())
    let values = await Promise.all(jsons)

    values.map(value => {
      console.log(value.data.name)
    })
  } catch(e) {
    console.log(error)
  }
}