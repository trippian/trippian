var koa = require('koa');
var app = koa();
var router = kroute();

app.use(cors({ headers: 'accept, authorization, content-type' }));

app.use(function *() {
  this.body = 'Hello World';
});

app.use(cors({ headers: 'accept, authorization, content-type' }));

app.use(bodyParser());

app.use(router);
app.listen(3000);