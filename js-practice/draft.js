{
  var result = 1
  function test(result) {
    result = 3
  }
  test(2)
  console.log(result)
}

{
  function a(b) {
    console.log(b)
    function b() {
      console.log(b)
    }
    b()
  }
  a()
}