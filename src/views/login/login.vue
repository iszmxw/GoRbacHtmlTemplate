<template>
  <div>
    <link href="static/login/login.css" media="all" rel="stylesheet">
    <body class="session-body">
      <div class="site-content">
        <div class="session-wrapper">
          <div class="ui container">
            <div class="session__body">
              <div class="session-sidebox">
                <div class="session-sidebox__container">
                  <div class="session-sidebox__header">
                    <div class="session-sidebox__logo">
                      <img alt="logo" src="https://gitee.com/iszmxw/FigureBed/raw/master/images/gorbac/go-logo.png">
                    </div>
                    <h1 class="session-sidebox__title" />
                    <h2 class="session-sidebox__subtitle">
                      GoRbac 基础权限管理
                    </h2>
                  </div>
                  <!-- <div class="session-sidebox__content">
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
              </div> -->
                  <div class="session-sidebox__footer">
                    <a href="/enterprises?from=login" target="_blank"><strong class="session-sidebox__icon-hot">GoRbac
                                                                        管理后台</strong>
                      <span class="session-sidebox__divider">-</span>
                      基础权限管理
                      <i class="iconfont icon-arrow-circle-right " />
                    </a>
                  </div>
                </div>

              </div>
              <div class="session-form">
                <div class="session-form__container is-login">
                  <header class="session-form__header">
                    <h2 class="session-form__title">
                      <span>登录</span>
                    </h2>
                    <span class="pull-right">
                      没有帐号？
                      <a href="/signup">点此注册</a>
                    </span>
                  </header>
                  <div class="session__flash-error">
                    <div class="ui message error flash_error flash_error_box" />
                  </div>
                  <form
                    id="new_user"
                    accept-charset="UTF-8"
                    action="/login"
                    class="ui custom form session__control session-login__form session-login__with-password "
                    data-control="password"
                    data-encrypt="true"
                    data-key="password"
                    data-need-verify="false"
                    method="post"
                  ><input type="hidden" name="encrypt_key" value="password">
                    <div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input
                      name="authenticity_token"
                      type="hidden"
                      value="IrnW7damHfai44UO+LC/4RqTkhO1Hy8b1qqu6VHPG0I="
                    ></div>
                    <input id="redirect_to_url" name="redirect_to_url" type="hidden">
                    <div class="session-login__body">
                      <div class="session-form__fields">
                        <div class="git-login-form-fields">
                          <div id="git-login" class="field">
                            <input
                              id="user_login"
                              class="login-password__account-input"
                              name="user[login]"
                              placeholder="手机／邮箱／个人空间地址"
                              type="text"
                            >
                          </div>
                          <div class="field">
                            <input
                              type="hidden"
                              name="encrypt_data[user[password]]"
                              value="AoNbPB4uMeBHR7YrDssLqC2gyR3QGAPSr4LmCEjYs8WSdG6YTaFobyS3NCNYsmCtusqW8rfJ98ofNgWwu+TuUkWVwtfzhZKA9SCjDbwPLTC7WrE15++g+syvAoiq9sKPtEMhB8ElHo9UMjbZjwOKKyChR/ioGTMM79m4Xn0BlmQ="
                            ><input
                              id="user_password"
                              data-encrypt="true"
                              placeholder="请输入密码"
                              type="password"
                            >
                          </div>
                          <div class="two fields">
                            <div class="field">
                              <div class="ui checkbox js-checkbox"><input
                                name="user[remember_me]"
                                type="hidden"
                                value="0"
                              ><input
                                id="user_remember_me"
                                name="user[remember_me]"
                                type="checkbox"
                                value="1"
                                tabindex="0"
                                class="hidden"
                              ><label>记住我</label></div>
                            </div>
                            <div class="field" style="text-align: right">
                              <a class="session__toggle-button" data-control="phone" href="">短信验证登录</a>
                            </div>
                          </div>
                          <div class="field">
                            <input
                              class="ui fluid orange submit button large"
                              name="commit"
                              sa_evt="loginButtonClick"
                              type="submit"
                              value="登 录"
                            >
                          </div>
                          <div class="field text-center">
                            <a class="forget-password" href="/password/new">已有帐号，忘记密码？</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <!-- <div class="session-login-oauth">
                <div class="session-login__oschina">
                  <a href="https://gitee.com/auth/oschina"><i class="icon-logo-osc iconfont osc"></i>
                    <span>
                      使用 OSChina 帐号登录
                    </span>
                  </a>
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
                      <a href="https://gitee.com/auth/aliyun">
                        <div class="git-other-login-icon">
                          <i class="aliyun icon-logo_aliyun iconfont" title="使用阿里云帐号登录"></i>
                        </div>
                      </a>
                    </div>
                    <div class="item">
                      <a href="https://gitee.com/auth/gitlab">
                        <div class="git-other-login-icon">
                          <i class="gitlab icon-logo-gitlab iconfont" title="使用 GitLab 帐号登录"></i>
                        </div>
                      </a>
                    </div>
                    <div class="item">
                      <a href="https://gitee.com/auth/huawei">
                        <div class="git-other-login-icon">
                          <i class="huawei icon-logo_huawei iconfont" title="使用华为帐号登录"></i>
                        </div>
                      </a>
                    </div>
                    <div class="item">
                      <a href="https://gitee.com/auth/github">
                        <div class="git-other-login-icon">
                          <i class="github icon-logo-github iconfont" title="使用 GitHub 帐号登录"></i>
                        </div>
                      </a>
                    </div>
                    <div class="item">
                      <span class="session-oauth__other-icon js-popup-default" data-popup-hoverable="true"
                        data-position="left center">
                        <i class="iconfont icon-ic-action-more "></i>
                      </span>
                      <div class="ui flowing popup session-oauth__other">
                        <div class="session-oauth__other-list">
                          <a class="item" href="https://gitee.com/auth/weibo">
                            <div class="git-other-login-icon">
                              <i class="icon-logo-weibo iconfont weibo" title="使用 Weibo 帐号登录"></i>
                            </div>
                          </a><a class="item" href="https://gitee.com/auth/qq_connect">
                            <div class="git-other-login-icon">
                              <i class="icon-logo-qq iconfont qq" title="使用 QQ 帐号登录"></i>
                            </div>
                          </a><a class="item" href="https://gitee.com/auth/windowslive">
                            <div class="git-other-login-icon">
                              <i class="icon-logo-windows iconfont windows" title="使用 WindowsLive 帐号登录"></i>
                            </div>
                          </a><a class="item" href="https://gitee.com/auth/wechat">
                            <div class="git-other-login-icon">
                              <i class="icon-logo_wechat iconfont wechat" title="使用微信帐号登录"></i>
                            </div>
                          </a><a class="item" href="https://gitee.com/auth/dingding">
                            <div class="git-other-login-icon">
                              <i class="dingding icon-logo-dingding iconfont" title="使用钉钉帐号登录"></i>
                            </div>
                          </a><a class="item" href="https://gitee.com/auth/trustie">
                            <div class="git-other-login-icon">
                              <i class="icon-logo_trustie iconfont trustie" title="使用 Trustie 帐号登录"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div> -->
                </div>

              </div>
            </div>
            <div class="session__footer">
              <span class="session__footer-item">
                <a href="https://gitee.com/" target="_blank">© Gitee.com</a>
              </span>
              <span class="session__footer-item">
                <a href="/about_us">关于我们</a>
              </span>
              <span class="session__footer-item">
                <a href="/terms">使用条款</a>
              </span>
              <span class="session__footer-item">
                <a href="/help">帮助文档</a>
              </span>
              <span class="session__footer-item">
                <a href="/self_services">在线自助服务</a>
              </span>
              <span class="session__footer-item">
                <a href="/user/activate">重发激活邮件</a>
              </span>
            </div>
          </div>
        </div>

      </div>

    </body>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
