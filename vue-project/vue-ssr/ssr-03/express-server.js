const fs = require('fs')
const Vue = require('vue')
const server = require('express')()
const VueServerRenderer = require('vue-server-renderer')
const renderer = VueServerRenderer.createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})

const context = {
  title: 'vue ssr案例',
  meta: `<meta name="theme-color" content="#4285f4">`,
  content: '这是服务端插入的内容，由 renderToString 第二个参数 context 提供',
  footer: 'Final Content'
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
      text: `项目仓库地址： <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">vue-hackernews-2.0</a>`
    },
    template: `
      <div>
        <div>访问的 URL 是： {{ url }}</div>
        <div v-html="text"></div>
        <br/>
      </div>`
  })

  renderer.renderToString(app, context).then(html => {
    // 这里输出就是将内容插入到模板后的整个html内容
    res.end(`${html}`)
  }).catch(err => {
    res.status(500).end('Internal Server Error')
    return
  })
})

const port = process.env.PORT || 8000
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})