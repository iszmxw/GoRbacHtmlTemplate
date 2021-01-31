import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/dashboard/login_log',
    method: 'post',
    data
  })
}

export function operationLog(data) {
  return request({
    url: '/dashboard/operation_log',
    method: 'post',
    data
  })
}

export function statistics(query) {
  return request({
    url: '/dashboard/statistics',
    method: 'get',
    params: query
  })
}

export function reset_password(data) {
  return request({
    url: `/dashboard/reset_password`,
    method: 'post',
    data
  })
}
