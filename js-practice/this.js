// var o1 = {
//   a: 1,
//   b: {
//     fn: function() {
//       // console.log(this)
//     }
//   }
// }
// o1.b.fn()


// let a = 1
// var o2 = {
//   a:10,
//   b:{
//     a:12,
//     fn:function(){
//       console.log(this.a); //undefined
//       console.log(this); //window
//     }
//   }
// }
// var j = o2.b.fn;
// j()



var name = 'Jenny'
function person() {
  this.a = 1
  function person1() {
    return this.a
  }
  return person1
}
console.log(person()) // Jenny



