import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* 路由模块使用 */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * 注释: 只有当route children.length大于等于1时，才会出现子菜单。
 * 详见: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   如果为 true, 项目不会显示在边栏中（默认值为false）
 * alwaysShow: true               如果为 true, 将始终显示根菜单
 *                                如果未设置AlwaysShow，则当项有多个子路由时，
 *                                它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           如果设置为no redirect，则不会在breadcrumb中重定向
 * name:'router-name'             名称由<keep alive>使用（必须设置！！！！）
 * meta : {
    roles: ['admin','editor']    控制页面角色（可以设置多个角色）
    title: 'title'               侧边栏和面包屑中显示的名称（推荐集）
    icon: 'svg-name'             图标显示在侧边栏中
    noCache: true                如果设置为true，则不会缓存该页（默认值为false）
    affix: true                  如果设置为真，则标签将粘贴在“标签”视图中。
    breadcrumb: false            如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径。
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基页
 * 所有角色都可以访问的路由组
 */
export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
},
{
  // 重新定义首页跳转位置
  path: '/',
  redirect: 'dashboard',
  hidden: true
}
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
//   {
//   path: '/system',
//   component: Layout,
//   redirect: '/system/page',
//   alwaysShow: true, // 将始终显示根菜单
//   name: 'System',
//   meta: {
//     title: 'system',
//     icon: 'component',
//     roles: ['admin'] // 可以在根导航中设置角色
//   },
//   children: [{ // 重置密码
//     path: 'resetPassword',
//     component: () => import('@/views/system/resetPassword'),
//     name: 'resetPassword',
//     hidden: true,
//     meta: {
//       title: 'resetPassword',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   { // 登录日志
//     path: 'loginLog',
//     component: () => import('@/views/system/loginLog'),
//     name: 'loginLog',
//     meta: {
//       title: 'loginLog',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   { // 操作日志
//     path: 'operationLog',
//     component: () => import('@/views/system/operationLog'),
//     name: 'operationLog',
//     meta: {
//       title: 'operationLog',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   { // 角色权限
//     path: 'permission',
//     component: () => import('@/views/system/permission'),
//     name: 'permission',
//     meta: {
//       title: 'permission',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   { // 菜单配置
//     path: 'menus',
//     component: () => import('@/views/system/menus'),
//     name: 'menus',
//     meta: {
//       title: 'menus',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   }
//   ]
// },
// {
//   path: '/merchant',
//   component: Layout,
//   redirect: '/merchant/page',
//   alwaysShow: true, // 将始终显示根菜单
//   name: 'merchant',
//   meta: {
//     title: 'merchant',
//     icon: 'user'
//   },
//   children: [{
//     path: 'merchant_add',
//     component: () => import('@/views/merchant/merchant_add'),
//     name: 'madd',
//     meta: {
//       title: 'madd',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   {
//     path: 'merchant_list',
//     component: () => import('@/views/merchant/merchant_list'),
//     name: 'mlist',
//     meta: {
//       title: 'mlist',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   {
//     path: 'store/store_list',
//     component: () => import('@/views/merchant/store/store_list'),
//     name: '门店列表',
//     meta: {
//       title: '门店列表',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   {
//     path: 'store/store_site',
//     component: () => import('@/views/merchant/store/store_site'),
//     name: '门店设置',
//     hidden: true,
//     meta: {
//       title: '门店设置',
//       roles: ['admin'] // 或者只能在子导航中设置角色
//     }
//   },
//   {
//     path: 'device/list',
//     component: () => import('@/views/merchant/device/list'),
//     name: '设备列表',
//     meta: {
//       title: '设备列表'
//     }
//   },
//   {
//     path: 'device/add',
//     component: () => import('@/views/merchant/device/add'),
//     name: '添加设备',
//     hidden: true,
//     meta: {
//       title: '添加设备'
//     }
//   }
//   ]
// },
// /** 当路由图太长时，可以将其拆分为小模块。 **/
// {
//   path: '*',
//   redirect: '/404',
//   hidden: true
// }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
