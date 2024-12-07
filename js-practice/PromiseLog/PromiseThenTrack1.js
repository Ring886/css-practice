let p = new Promise((resoleve, reject) => {
  setTimeout(() => {
      resoleve("返回值");
  }, 1000);
});
   
const backP = p.then((res) => {
  console.log("----打印:res", res);
});
const finallyBackP = backP.then((res) => {
  return "又有数据";
});
setTimeout(() => {
  console.log("----打印:backP", backP);
}, 2000);
setTimeout(() => {
  console.log("----打印:finallyBackPP", finallyBackP);
}, 3000);
//执行结果
// ----打印：res 返回值
// ----打印：backP Promise {<fulfilled>: undefined}
//----打印：finallyBackPP Promise {<fulfilled>: '又有数据'}