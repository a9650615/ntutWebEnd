const koa   = require('koa')
const bodyParser = require('koa-bodyparser')
const db = require('./models/db')
db.connect()
const routes = require('./routes')
const app   = new koa()

app
  .use(bodyParser())
  .use(routes.allowedMethods())
  .use(routes.routes())

// catch all middleware, only land here
// if no other routing rules match
// make sure it is added after everything else
app.use(async ctx =>{
  // this.body = 'Invalid URL!!!';
  ctx.request.body
  // or redirect etc
  // this.redirect('/someotherspot');
});

app.listen(3000);
