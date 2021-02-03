<template>

  <body class="session-body">
    <div class="site-content">
      <div class="session-wrapper">
        <div class="ui container">
          <div class="session__body">
            <div class="session-sidebox">
              <div class="session-sidebox__container">
                <div class="session-sidebox__header">
                  <div class="session-sidebox__logo">
                    <img
                      alt="logo"
                      src="@/assets/style/img/gopher1.png"
                    >
                    <img
                      alt="logo"
                      src="@/assets/style/img/gopher.png"
                    >
                  </div>
                  <h1 class="session-sidebox__title" />
                  <h2 class="session-sidebox__subtitle">
                    GoRbac 基础权限管理
                  </h2>
                </div>
                <div class="session-sidebox__content">
                  <div class="session-sidebox-content__container">
                    <div class="session-sidebox-gitee__container">
                      <div class="session-sidebox-gitee__item">
                        <div class="session-sidebox-gitee__number"> 600 万+ </div>
                        <div class="session-sidebox-gitee__title"> 开发者 </div>
                      </div>
                      <div class="session-sidebox-gitee__item">
                        <div class="session-sidebox-gitee__number"> 1500 万+ </div>
                        <div class="session-sidebox-gitee__title"> 代码仓库 </div>
                      </div>
                      <div class="session-sidebox-gitee__item">
                        <div class="session-sidebox-gitee__number"> 18 万+ </div>
                        <div class="session-sidebox-gitee__title"> 企业客户 </div>
                      </div>
                      <div class="session-sidebox-gitee__item">
                        <div class="session-sidebox-gitee__number"> 2000+ </div>
                        <div class="session-sidebox-gitee__title"> 高校 </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="session-sidebox__footer">
                  <a
                    href="https://gitee.com/iszmxw/GoRbacApiService"
                    target="_blank"
                  >
                    <strong class="session-sidebox__icon-hot">GoRbac 管理后台</strong>
                    <span class="session-sidebox__divider">-</span>
                    基础权限管理
                    <i class="iconfont icon-arrow-circle-right " />
                  </a>
                </div>
              </div>
            </div>

            <!-- 表单部分 -->
            <div class="session-form">
              <div class="session-form__container is-login">
                <header class="session-form__header">
                  <h2 class="session-form__title">
                    <span>登录</span>
                  </h2>
                  <span class="pull-right">
                    没有帐号？
                    <a href="javascript:void(0)">点此注册</a>
                  </span>
                </header>
                <div class="session__flash-error">
                  <div class="ui message error flash_error flash_error_box" />
                </div>
                <el-form
                  ref="loginForm"
                  class="ui custom form session__control session-login__form session-login__with-password"
                  :model="loginForm"
                  :rules="loginRules"
                  auto-complete="on"
                  label-position="left"
                >
                  <div class="session-login__body">
                    <div class="session-form__fields">
                      <el-tooltip
                        v-model="capsTooltip"
                        content="Caps lock is On"
                        placement="right"
                        manual
                      >
                        <div class="git-login-form-fields">
                          <div class="field">
                            <el-form-item prop="username">
                              <el-input
                                ref="username"
                                v-model="loginForm.username"
                                class="login-password__account-input"
                                :placeholder="$t('login.username')"
                                name="username"
                                type="text"
                                tabindex="1"
                                auto-complete="on"
                                @blur="capsTooltip = false"
                              />
                            </el-form-item>
                          </div>
                          <div class="field">
                            <el-form-item prop="password">
                              <el-input
                                ref="password"
                                v-model="loginForm.password"
                                type="password"
                                :placeholder="$t('login.password')"
                                name="password"
                                tabindex="2"
                                auto-complete="on"
                                @blur="capsTooltip = false"
                                @keyup.enter.native="handleLogin"
                              />
                            </el-form-item>
                          </div>

                          <div class="field">
                            <el-button
                              class="ui fluid orange submit button large"
                              :loading="loading"
                              type="primary"
                              style="width:100%;margin-bottom:30px;"
                              @click.native.prevent="handleLogin"
                            >{{ $t('login.logIn') }}</el-button>
                          </div>
                          <div class="field text-center">
                            <a
                              class="forget-password"
                              href="javascript:void(0)"
                            >已有帐号，忘记密码？</a>
                          </div>
                        </div>
                      </el-tooltip>
                    </div>
                  </div>
                </el-form>

                <!-- 其他第三方登录 -->
                <div class="session-login-oauth">

                  <div class="session-login__oschina">
                    <a href="javascript:void(0)">
                      <!-- <i class="icon-logo-osc iconfont osc"></i> -->
                      <span>
                        使用 OSChina 帐号登录
                      </span>
                    </a>
                    <div class="item">
                      <a href="javascript:void(0)">
                        <div class="git-other-login-icon">
                          <i
                            class="github icon-logo-github iconfont"
                            title="使用 GitHub 帐号登录"
                          />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="session-login-oauth__container">
                    <div class="field">
                      <div class="ui horizontal divider session-login__oauth-title">
                        <span class="text-muted">
                          其他方式登录
                        </span>
                      </div>
                    </div>
                    <div class="ui horizontal list session-oauth__list">

                      <div class="item">
                        <a href="javascript:void(0)">
                          <div class="git-other-login-icon">
                            <i
                              class="icon-logo-windows iconfont windows"
                              title="使用 WindowsLive 帐号登录"
                            />
                          </div>
                        </a>
                      </div>

                      <div class="item">
                        <a href="javascript:void(0)">
                          <div class="git-other-login-icon">
                            <i
                              class="icon-logo_wechat iconfont wechat"
                              title="使用微信帐号登录"
                            />
                          </div>
                        </a>
                      </div>

                      <div class="item">
                        <a href="javascript:void(0)">
                          <div class="git-other-login-icon">
                            <i
                              class="icon-logo-weibo iconfont weibo"
                              title="使用 Weibo 帐号登录"
                            />
                          </div>
                        </a>
                      </div>
                      <div class="item">
                        <a href="javascript:void(0)">
                          <div class="git-other-login-icon">
                            <i
                              class="icon-logo-qq iconfont qq"
                              title="使用 QQ 帐号登录"
                            />
                          </div>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
                <!-- 其他第三方登录 -->

              </div>
            </div>
            <!-- 表单部分 -->

          </div>
          <!-- 底部信息 -->
          <div class="session__footer">
            <span class="session__footer-item">
              <a
                href="http://blog.54zm.com"
                target="_blank"
              >© 追梦小窝</a>
            </span>
            <span class="session__footer-item">
              <a
                href="https://gitee.com/iszmxw/GoRbacApiService"
                target="_blank"
              >GoRbacApiService</a>
            </span>
            <span class="session__footer-item">
              <a
                href="javascript:void(0)"
                target="_blank"
              >帮助文档</a>
            </span>
            <span class="session__footer-item">
              <a
                href="https://gitee.com/iszmxw/GoRbacHtmlTemplate"
                target="_blank"
              >GoRbacHtmlTemplate</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('登录账户不能为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('登录密码不能小于六位数'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style src="../../assets/style/login.css" scoped>
</style>
