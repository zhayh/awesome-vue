const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
      text: `vue ssr官网：<a href="https://ssr.vuejs.org/" target="_blank">Vue SSR Guide</a>`,
      repository: `官方项目仓库：<a href="https://github.com/vuejs/vue-hackernews-2.0/" target="_blank">vue-hackernews-2.0</a>`
    },
    template: `
      <div>
        <div>当前访问的URL是： {{ url }}</div>
        <div v-html="text"></div>
        <div v-html="repository"></div>
      </div>
    `
  })

  renderer.renderToString(app).then(html => {
    // 处理中文乱码，或使用<meta charset="utf-8">
    // res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })   
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <meta charset="utf-8">
        <head><title>Vue SSR案例</title></head>
        <body>${html}</body>
      </html>
    `)
  }).catch(err => {
    res.status(500).end('Internal Server Error')
    return
  })
})

// 启动服务器
const port = process.env.PORT || 8000
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

// server.set('port', process.env.PORT || 8000)
// let hostname = '0.0.0.0'
// server.listen(server.get('port'), hostname, () => {
//   console.log(`Server running at http://${hostname}:${server.get('port')}`)
// })

