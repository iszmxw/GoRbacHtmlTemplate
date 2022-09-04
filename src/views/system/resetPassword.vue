<template>
  <BasicLayout>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="旧登录密码">
          <el-input v-model="form.old_password" type="password" />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="form.new_password" type="password" />
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input v-model="form.repeat_password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </BasicLayout>
</template>

<script>
import { reset_password } from '@/api/gorbac/system/dashboard'
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      form: {
        old_password: '',
        new_password: '',
        repeat_password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      reset_password(this.form).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
          setTimeout(() => {
            location.reload()
          }, 1000)
        }
      })
    }
  }
}
</script>
