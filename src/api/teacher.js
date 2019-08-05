import request from '@/utils/request'

export function ageDistr() {
  return request({
    url: '/api/v1/teacherage',
    method: 'get',
  })
}


