<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff"
          :unique-opened="true" :collapse="isCollapse" :collapse-transition="false"
          :router="true" :default-active='activePath'>
          <el-submenu v-for="item in menuList" :key="item.id" :index="item.id + ''" >
            <!--一级菜单的模板区域-->
            <template slot="title">
              <i :class="menuIcons[item.id]"></i>
              <span>{{ item.name }}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item v-for="subItem in item.children" :key="subItem.id"
              :index="'/' + subItem.path" @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体区域 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    // 这里存放数据
    return {
      // 菜单数据
      menuList: [
        {
          id: 10,
          name: '商品管理',
          path: 'goods',
          order: 1,
          children: [
            {
              id: 101,
              name: '商品列表',
              path: 'goods'
            }, {
              id: 102,
              name: '商品分类',
              path: 'category'
            }
          ]
        }, {
          id: 11,
          name: '订单管理',
          path: 'orders',
          order: 2,
          children: [
            {
              id: 111,
              name: '订单列表',
              path: 'orders'
            }
          ]
        }, {
          id: 12,
          name: '用户管理',
          path: 'users',
          order: 3,
          children: [
            {
              id: 121,
              name: '用户列表',
              path: 'users'
            }
          ]
        }
      ],
      menuIcons: {
        10: 'iconfont icon-shangpin',
        11: 'iconfont icon-danju',
        12: 'iconfont icon-user'
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 退出登录
    logout () {
      window.sessionStorage.clear()
      this.$route.push('/login')
    },
    // 菜单折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer
}
</style>
