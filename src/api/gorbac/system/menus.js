import request from '@/utils/request'

// 添加
export function addMenu(data) {
  return request({
    url: '/menus/add',
    method: 'post',
    data
  })
}

// 删除
export function delMenu(data) {
  return request({
    url: '/menus/delete',
    method: 'post',
    data
  })
}

// 获取单条数据
export function getMenu(data) {
  return request({
    url: '/menus/detail',
    method: 'post',
    data
  })
}

// 更新数据
export function updateMenu(data) {
  return request({
    url: '/menus/edit',
    method: 'post',
    data
  })
}

// 获取数据列表
export function listMenu(data) {
  return request({
    url: '/menus/list',
    method: 'post',
    data
  })
}

// 获取菜单路由
export function getMenuRoutes(data) {
  return request({
    url: '/menus/async_routes',
    method: 'post',
    data
  })
}
