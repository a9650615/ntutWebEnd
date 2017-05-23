const router = require('koa-router')()
const PostModule = require('../models/PostModule')

router
  .get('/', async (ctx) => {
    // ctx.params.page
    ctx.body = await PostModule.listPosts(ctx.request.header.auth, 0)
  })
  .post('/push', async (ctx) => {
    ctx.body = await PostModule.pushPost(ctx.request.body)
    // ctx.body = {status: true, data: {id: ret.id}}
    // ctx.body = {status: false, msg: ['認證失敗']}
  })

module.exports = router
