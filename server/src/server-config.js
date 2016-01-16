const koa = require('koa');
const app = koa();
const router = require('koa-router')();
const cors = require('koa-cors');
const bodyParser = require('koa-body-parser');

app.use(function *() {
  this.body = 'Hello from koajs';
});

// app.use('*', function *(req, res) {
//   res.status(404).send('404: Page Not Found');
// });

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors());

module.exports = app;