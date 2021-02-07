import request from '@/utils/request'

export function loginLog(data) {
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
