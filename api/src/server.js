const koa = require('koa');
const app = koa();
const router = require('koa-router')();
const cors = require('koa-cors');

app.use(function *() {
  this.body = 'Hello from koajs';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors());

app.listen(3001);