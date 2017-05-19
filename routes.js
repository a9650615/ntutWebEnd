const router = require('koa-router')()
const TestModule = require('./models/TestModule')

router
  .get('/', async(ctx, next) => {
    ctx.body = 'index'
  })
  .use('/user', require('./router/user').routes())
  .get('/test', async (ctx, next) => {
    // const test = new TestModule({
    //   id: 0,
    //   name: 'asd'
    // })
    // await test.save()
    // await test.increment('id')
    // const test = await TestModule.findOne()
    // test.increment('id')
    // test.save()
    // ctx.body = test
  })

module.exports = router
