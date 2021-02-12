import Vue from 'vue'
import {
  asyncRoutes,
  constantRoutes
} from '@/router'
import { getMenuRoutes } from '@/api/gorbac/system/menus'
import Layout from '@/layout'

/**
 * 后台查询的菜单数据拼装成路由格式的数据
 * @param routes
 */
export function formatMenu(routes, data) {
  data.forEach(item => {
    const menu = {
      path: item.route,
      component: item.component === 'Layout' ? Layout : loadView(item.component),
      // redirect: item.route,
      // alwaysShow: true, // 将始终显示根菜单
      name: item.name,
      meta: {
        title: item.name,
        icon: item.icon,
        roles: ['admin'], // 可以在根导航中设置角色
        noCache: true
      },
      children: [],
      hidden: item.status === 0
    }
    if (item.children) {
      formatMenu(menu.children, item.children)
    }
    routes.push(menu)
  })
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) => require(['@/views' + view], resolve)
}

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = {
      ...route
    }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    console.log(roles)
    return new Promise(resolve => {
      const loadMenuData = []
      getMenuRoutes().then(response => {
        // console.log(JSON.stringify(response))
        if (response.code !== 20000) {
          Vue.prototype.$message({
            message: '菜单数据加载异常',
            type: 'error'
          })
          // 异常注销登录
          this.dispatch('user/logout')
        } else {
          Object.assign(loadMenuData, response.data)
          // 格式化路由菜单数据
          formatMenu(asyncRoutes, loadMenuData)
          asyncRoutes.push({ path: '*', redirect: '/', hidden: true })
          commit('SET_ROUTES', asyncRoutes)
          resolve(asyncRoutes)
        }
      }).catch(error => {
        console.log(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
