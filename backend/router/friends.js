const router = require('koa-router')()
const FriendsModule = require('../models/FriendsModules.js')

router
  .get('/list/:page', async ctx => {
    let page = ctx.request.body.page
    console.log(ctx.request.header.auth)
  })
  .post('/req/:id', async ctx => {
    let data = ctx.request.body
    ctx.body = await FriendsModule.request(data.token, ctx.params.id)
  })

module.exports = router
