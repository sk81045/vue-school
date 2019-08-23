import request from '@/utils/request'

export function getList(page = 0, parPage = 10,query = '') {
  return request({
    url: '/api/v1/eduall?page='+page+'&limit='+parPage+'&query='+JSON.stringify(query),
    method: 'get',
  })
}

export function stuEdu(page = 0, parPage = 10,query = '') {
  return request({
    url: '/api/v1/stuedu?page='+page+'&limit='+parPage+'&query='+JSON.stringify(query),
    method: 'get',
  })
}

export function selectSc(id) {    //查询学校信息
  return request({
    url: '/api/v1/schoolinfo?id='+id,
    method: 'get',
  })
}
