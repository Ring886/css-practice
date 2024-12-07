let p = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("返回值");
  }, 1000);
});
 
const backP = p.then((res) => {
  console.log("----打印：", res);
  return Promise.resolve(res + "成功的promise");
});
const finallyBackP = backP.then((res) => {
  console.log("----打印：", res);
  return Promise.reject("最后是失败的promise");
});
setTimeout(() => {
  console.log("----打印：backP", backP);
}, 2000);
setTimeout(() => {
  console.log("----打印：finallyBackPP", finallyBackP);
}, 3000);
 
//执行结果
// ----打印： 返回值
// ----打印： 返回值成功的promise
// ----打印：backP Promise {<fulfilled>: '返回值成功的promise'}
// ----打印：finallyBackPP Promise {<rejected>: '最后是失败的promise'}