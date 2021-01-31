import request from '@/utils/request'

export function getRoleRoutes(data) {
  return request({
    url: '/roles/routes',
    method: 'post',
    data
  })
}

export function getRoles(data) {
  return request({
    url: '/roles/list',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: `/roles/edit`,
    method: 'post',
    data
  })
}
