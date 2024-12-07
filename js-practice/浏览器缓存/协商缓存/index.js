const Koa =require('koa');
const path=require('path');
//静态资源中间件
const static = require('koa-static')
const conditional  = require('koa-conditional-get');
const etag = require('koa-etag');
const app = new Koa();
const host = 'localhost';
const port = 8000;
app.use(conditional());
app.use(etag());
app.use(static(path.join(__dirname,"static")));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});