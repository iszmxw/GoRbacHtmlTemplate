<template>
  <div class="main">
    <el-card class="box-card">

      <div slot="header" class="clearfix">
        <span>创建商户</span>
      </div>

      <el-form ref="form" :model="form" label-width="90px" style="display: inline-block">
        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item label="商户名称">
              <el-input v-model="form.company" placeholder="请输入商户的名称" />
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item label="商户账号">
              <el-input v-model="form.username" placeholder="请输入商户的账号，用来登录系统" />
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item label="手机号码">
              <el-input v-model="form.mobile" placeholder="手机号码，可以为空，由商户自行补充" />
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item label="提现手续费">
              <el-input v-model="form.fee" placeholder="提现手续费，如果不设置的话则为0">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item label="登录密码">
              <el-input v-model="form.password" placeholder="请输入商户的登录密码" />
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :lg="24">
          <el-col :lg="12">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { add } from '@/api/old/merchant'

export default {
  data() {
    return {
      form: {
        company: '',
        username: '',
        mobile: '',
        fee: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      add(this.form).then(res => {
        if (res.code === 1) {
          this.$notify({
            title: '成功',
            message: res.message,
            type: 'success'
          })
          this.$router.push({
            path: '/merchant/list'
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: res.message
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.main {
  padding: 32px;
}
</style>

