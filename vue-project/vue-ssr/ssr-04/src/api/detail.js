const projectList = [
  {
    id: 1,
    name: 'Vue官方文档',
    address: 'https://cn.vuejs.org/v2/guide/',
    author: 'You',
    description: 'Vue的学习教程'
  },
  {
    id: 2,
    name: 'Vue的API文档',
    address: 'https://cn.vuejs.org/v2/api/',
    author: 'You',
    description: 'Vue的API文档'
  },
  {
    id: 3,
    name: 'Vue的官方案例',
    address: 'https://cn.vuejs.org/v2/examples/',
    author: 'You',
    description: 'Vue的官方案例列表'
  },
  {
    id: 4,
    name: 'Vue Cli的官方文档',
    address: 'https://cli.vuejs.org/zh/guide/',
    author: 'You',
    description: 'Vue Cl的学习教程'
  },
  {
    id: 5,
    name: 'Vue Router的官方文档',
    address: 'https://router.vuejs.org/zh/',
    author: 'You',
    description: 'Vue Router的学习教程'
  },
  {
    id: 6,
    name: 'Vuex的官方文档',
    address: 'https://vuex.vuejs.org/zh/',
    author: 'You',
    description: 'Vuex的学习教程'
  },
  {
    id: 7,
    name: 'Vue服务端渲染的官方文档',
    address: 'https://ssr.vuejs.org/zh/',
    author: 'You',
    description: 'Vue服务端渲染的学习教程'
  }
]

export function getProjectList () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, projectList)
  })
}

export function getItem (id) {
  let Item = {}
  Item.total = projectList.length
  Item.item = {}
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].id === parseInt(id)) {
      Item.item = projectList[i]
      break
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, Item)
  })
}