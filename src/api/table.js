import request from '@/utils/request'

export function getList(page = 0, parPage = 10) {
  return request({
    url: '/api/v1/teacherlist?page='+page+'&limit='+parPage,
    method: 'get',
  })
}

export function test(params) {
	return request({
	  url: '/api/v1/cafes/page/0',
	  method: 'get',
	  params		
	})
}
