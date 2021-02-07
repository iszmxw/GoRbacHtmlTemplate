import request from '@/utils/request'

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
