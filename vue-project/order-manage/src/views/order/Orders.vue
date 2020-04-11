<!-- 我的页面 -->
<template>
  <div class="order-list">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片视图区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 搜索及添加区域 -->
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getOrderList">
            <el-button slot="append" icon="el-icon-search" @click="getOrderList" ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加订单</el-button>
        </el-col>
      </el-row>
      <!-- 订单列表数据 -->
      <el-table :data="orderList" border stripe>
        <el-table-column label="序号" type="index" align="center"> </el-table-column>
        <el-table-column label="订单编号" prop="orderNo"> </el-table-column>
        <el-table-column label="订单金额" prop="orderPrice"> </el-table-column>
        <el-table-column label="下单时间" prop="createTime">
          <template v-slot="scope">
            {{ scope.row.createTime | dateFormat }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit"
              @click="showEditDialog(scope.row.orderId)"
            ></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete"
              @click="deleteOrder(scope.row.orderId)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[5, 10, 15]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加订单对话框 -->
    <el-dialog title="添加订单" :visible.sync="addDialogVisible"
    width="50%" center @close="addDialogClosed" >
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px" >
        <el-form-item label="订单金额" prop="orderPrice">
          <el-input v-model.number="addForm.orderPrice"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrder">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改订单对话框 -->
    <el-dialog title="修改订单" :visible.sync="editDialogVisible"
    width="50%" center @close="editDialogClosed">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="80px" >
        <el-form-item label="订单编号">
          <el-input v-model="editForm.orderNo" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单金额" prop="orderPrice">
          <el-input v-model.number="editForm.orderPrice"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrder">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取订单列表的参数对象
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 10
      },
      total: 0,
      orderList: [],
      // 控制添加订单对话框的显示与隐藏
      addDialogVisible: false,
      // 添加表单数据
      addForm: {
        orderPrice: 0,
        userId: 2
      },
      // 表单验证
      addFormRules: {
        orderPrice: [
          { required: true, message: '请输入金额', trigger: 'blur' },
          { type: 'number', message: '请输入数字', trigger: 'blur' }
        ]
      },
      // 控制修改订单对话框的显示与隐藏
      editDialogVisible: false,
      editForm: {
        orderNo: '',
        orderPrice: 0
      },
      editFormRules: {
        orderPrice: [
          { required: true, message: '请输入金额', trigger: 'blur' },
          { type: 'number', message: '请输入数字', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getOrderList()
  },
  // 方法集合
  methods: {
    async getOrderList () {
      const { data, status } = await this.$http.get('orders',
        { params: this.queryInfo })
      if (status !== 200 || data === 'error') {
        return this.$message.error('获取订单列表失败')
      }
      this.total = data.total
      this.orderList = data.orders
    },
    handleSizeChange (newSize) {
      this.queryInfo.pageSize = newSize
      this.getOrderList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pageNum = newPage
      this.getOrderList()
    },
    // 监听添加订单对话框的关闭事件
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    // 添加订单
    addOrder () {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        const { data, status } = await this.$http.post('orders', this.addForm)
        if (status !== 200 || data === '添加失败') {
          return this.$message.error('添加订单失败')
        }
        this.$message.success('添加订单成功')
        this.getOrderList()
        this.addDialogVisible = false
      })
    },
    async showEditDialog (id) {
      const { data, status } = await this.$http.get('orders/' + id)
      if (status !== 200) {
        return this.$message.error('查询订单失败')
      }
      this.editForm = data
      this.editDialogVisible = true
    },
    // 监听修改订单对话框的关闭事件
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    // 修改订单
    updateOrder (id) {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return
        const { data, status } = await this.$http.put('orders', this.editForm)
        if (status !== 200 || data === '修改失败') {
          return this.$message.error('修改订单失败')
        }
        this.$message.success('修改订单成功')
        this.getOrderList()
        this.editDialogVisible = false
      })
    },
    // 根据id删除订单
    async deleteOrder (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      // 如果用户确认删除，返回字符串confirm
      // 如果用户取消删除，返回字符串cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data, status } = await this.$http.delete('orders/' + id)
      if (status !== 200 && data === '删除失败') {
        return this.$message.error('删除订单失败')
      }
      this.$message.success('删除改订单成功')
      this.getOrderList()
    }
  }
}
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
