import request from '@/utils/request'

export function allschool() {
  return request({
    url: '/api/v1/allschool',
    method: 'get',
  })
}

export function update(data) {
	return request({
	  url: '/api/v1/updateschool',
	  method: 'post',
	  data
	})
}

export function add(data) {
	return request({
	  url: '/api/v1/addschool',
	  method: 'post',
	  data
	})
}

export function delet(data) {
	console.log('dele',data)
	return request({
	  url: '/api/v1/deleteschool',
	  method: 'post',
	  data: {data}
	}) 
}

export function query(data) {
	console.log('dele',data)
	return request({
	  url: '/api/v1/queryschool?id='+data,
	  method: 'get'
	}) 
}