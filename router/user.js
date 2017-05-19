const router = require('koa-router')()
const userModule = require('../models/UserModule')

router
  .get('/', async (ctx, next) => {
    ctx.body = 'user page'
    await next()
  })
  .post('/create', async (ctx, next) => {
    ctx.body = await userModule.add(ctx.request.body)
  })
  .post('/auth', async (ctx, next) => {
    ctx.body = await userModule.auth(ctx.request.body)
  })

module.exports = router
