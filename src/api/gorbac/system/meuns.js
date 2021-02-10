import request from '@/utils/request'

export function listMenu(data) {
  return request({
    url: '/menus/list',
    method: 'post',
    data
  })
}

export function getMenu(data) {
  return request({
    url: '/menus/list',
    method: 'post',
    data
  })
}

export function delMenu(data) {
  return request({
    url: '/menus/delete',
    method: 'post',
    data
  })
}

export function addMenu(data) {
  return request({
    url: '/menus/add',
    method: 'post',
    data
  })
}

export function updateMenu(data) {
  return request({
    url: '/menus/list',
    method: 'post',
    data
  })
}
