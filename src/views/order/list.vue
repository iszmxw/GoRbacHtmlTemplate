<template>
  <BasicLayout>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>订单列表</span>
        <span style="float:right">
          <el-button type="primary" @click="dialogVisibleAdd = true">创建钱包</el-button>
        </span>
      </div>
      <el-table :data="accountList">
        <el-table-column
          align="center"
          label="用户交易hash"
          width="220"
        >
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户钱包地址"
          width="220"
        >
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column>

        <el-table-column
          align="center"
          label="系统钱包地址"
          width="220"
        >
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column>

        <el-table-column
          align="header-center"
          label="交易金额"
        >
          <template slot-scope="scope">{{ scope.row.role_name }}</template>
        </el-table-column>
        <el-table-column
          align="header-center"
          label="订单有效期"
        >
          <template slot-scope="scope">{{ scope.row.mobile }}</template>
        </el-table-column>

        <el-table-column
          align="header-center"
          label="订单创建ip"
        >
          <template slot-scope="scope">{{ scope.row.mobile }}</template>
        </el-table-column>

        <el-table-column
          align="header-center"
          label="订单核对ip"
        >
          <template slot-scope="scope">{{ scope.row.mobile }}</template>
        </el-table-column>

        <el-table-column
          align="header-center"
          label="订单备注"
        >
          <template slot-scope="scope">{{ scope.row.mobile }}</template>
        </el-table-column>

        <el-table-column
          align="header-center"
          label="支付状态"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.status===1"
              type="success"
              effect="dark"
            >
              正常
            </el-tag>
            <el-tag
              v-else-if="scope.row.status===2"
              type="danger"
              effect="dark"
            >
              冻结
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="header-center"
          label="创建时间"
        >
          <template slot-scope="scope">{{ scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</template>
        </el-table-column><el-table-column
          align="header-center"
          label="更新时间"
        >
          <template slot-scope="scope">{{ scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
              @click="getDetail(scope.row)"
            >编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              @click="deleteData(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog
        :visible.sync="dialogVisibleAdd"
        title="创建钱包"
        width="35%"
      >
        <el-row :gutter="15">
          <el-form
            ref="elForm"
            :model="formData"
            :rules="rules"
            size="medium"
          >
            <el-col :span="12">
              <el-form-item
                label="用户名"
                prop="username"
              >
                <el-input
                  v-model="formData.username"
                  placeholder="请输入用户名"
                  clearable
                  prefix-icon="el-icon-user"
                  :style="{width: '100%'}"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="用户密码"
                prop="password"
              >
                <el-input
                  v-model="formData.password"
                  placeholder="请输入用户密码"
                  clearable
                  prefix-icon="el-icon-lock"
                  :style="{width: '100%'}"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="账号类型"
                prop="level"
              >
                <el-select
                  v-model="formData.level"
                  placeholder="请选择账号类型"
                  clearable
                  :style="{width: '100%'}"
                >
                  <el-option
                    v-for="(item, index) in levelOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="用户角色"
                prop="role_id"
              >
                <el-select
                  v-model="formData.role_id"
                  placeholder="请选择用户角色"
                  clearable
                  :style="{width: '100%'}"
                >
                  <el-option
                    v-for="(item, index) in role_idOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="手机号码"
                prop="mobile"
              >
                <el-input
                  v-model="formData.mobile"
                  placeholder="请输入手机号码"
                  clearable
                  prefix-icon="el-icon-mobile-phone"
                  :style="{width: '100%'}"
                />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item
                label="状态"
                prop="status"
              >
                <el-radio-group
                  v-model="formData.status"
                  size="medium"
                >
                  <el-radio
                    v-for="(item, index) in statusOptions"
                    :key="index"
                    :label="item.value"
                    :disabled="item.disabled"
                  >{{ item.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
        <div slot="footer">
          <el-button @click="dialogVisibleAdd = false">取消</el-button>
          <el-button
            type="primary"
            @click="handelConfirm"
          >确定</el-button>
        </div>
      </el-dialog>

    </el-card>
  </BasicLayout>
</template>

<script>
import { createAccount, delAccount, editAccount, getList } from '@/api/gorbac/users/user'

export default {
  data() {
    return {
      formData: {
        username: undefined,
        password: undefined,
        level: 1,
        role_id: undefined,
        status: 1,
        mobile: undefined
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入用户密码',
          trigger: 'blur'
        }],
        level: [{
          required: true,
          message: '请选择账号类型',
          trigger: 'change'
        }],
        role_id: [{
          required: true,
          message: '请选择用户角色',
          trigger: 'change'
        }],
        status: [{
          required: true,
          message: '状态不能为空',
          trigger: 'change'
        }],
        mobile: [{
          required: true,
          message: '请输入手机号码',
          trigger: 'blur'
        }]
      },
      levelOptions: [{
        'label': '管理员',
        'value': 1
      }, {
        'label': '商户',
        'value': 2
      }],
      role_idOptions: [{
        'label': '超级管理员',
        'value': 1
      }, {
        'label': '运营人员',
        'value': 2
      }],
      statusOptions: [{
        'label': '正常',
        'value': 1
      }, {
        'label': '冻结',
        'value': 2
      }],
      accountList: [],
      dialogVisibleAdd: false,
      dialogVisibleEdit: false
    }
  },
  computed: {
  },
  created() {
    // 获取用户额列表数据
    this.getLists()
  },
  methods: {
    // 获取用户列表
    async getLists() {
      const res = await getList()
      // 获取系统所有角色列表
      this.accountList = res.data.data
    },
    // 删除数据
    deleteData(row) {
      const that = this
      this.$confirm('是否确认删除名称为"' + row.name + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        delAccount({ id: row.id }).then(response => {
          if (response.code === 1) {
            that.$message.success(response.msg)
            that.getList()
          }
        })
      }).catch(function() { })
    },
    // 获取路由详情
    getDetail(row) {
      // getMenu({ id: row.id }).then(response => {
      //   if (response.code === 1) {
      //     const res = response.data
      //     this.form.id = res.id
      //     this.form.parent_id = res.parent_id
      //     this.form.name = res.name
      //     this.form.type = res.type
      //     this.form.sort = res.sort
      //     this.form.status = res.status
      //     this.form.icon = res.icon
      //     this.form.component = res.component
      //     this.form.route = res.route
      //     this.dialogFormVisibleEdit = true
      //   }
      // })
    },
    // 确认创建用户
    handelConfirm() {
      createAccount({}).then(res => {

      })
      editAccount({}).then(res => {

      })
    }
  }
}
</script>
