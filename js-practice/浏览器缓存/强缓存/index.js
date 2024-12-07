//index.js
const Koa =require('koa');
const path=require('path');
//静态资源中间件
const static = require('koa-static')
const app = new Koa();
const host = 'localhost';
const port = 8080;
app.use(async (ctx, next) => {
    // 设置响应头Cache-Control 设置资源有效期为300秒
     ctx.set({
       'Cache-Control': 'max-age=10'  
     });
     await next();
   });
app.use(static(path.join(__dirname,"static")));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});