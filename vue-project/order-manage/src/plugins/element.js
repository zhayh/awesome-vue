import Vue from 'vue'

// 按需导入
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button, Form, FormItem, Input, Message,
  Container, Header, Aside, Main, Footer,
  Menu, Submenu, MenuItem,
  Breadcrumb, BreadcrumbItem,
  Card, Row, Col,
  Table, TableColumn,
  Pagination,
  Dialog,
  MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)

// 全局挂载Message、confirm
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
