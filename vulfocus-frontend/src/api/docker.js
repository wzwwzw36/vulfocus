import request from '@/utils/request'

export function ImgList(data,flag,page,temp,type,rank) {
  if(data === undefined){
    data = ""
  }
  if(rank === undefined || rank == null){
    rank = 0.0
  }
  if(type === undefined || type == null){
    type = ""
  }
  if(page === undefined || page == null){
    page =1
  }
  let url = "/images/?query="+data+"&page="+page+'&rank='+rank+'&type='+type
  let paramFlag = ""
  if(flag === true){
    paramFlag = "flag"
    url += "&flag="+paramFlag
  }
  let tempFlag =""
  if(temp === true){
    tempFlag = "temp"
    url += "&temp="+tempFlag
  }
  return request({
    url: url,
    method: 'get'
  })
}

export function ContainerINFO(id) {
  return request({
    url: '/images/'+id,
    method: 'get'
  })
}
export function ContainerSTATUS(id) {
  return request({
    url: '/container/'+id+'/status/',
    method: 'get'
  })
}

export function get_website_imgs() {
  return request({
    url: 'get/website/imgs',
    method: 'post'
  })
}

export function ContainerSTART(id) {
  return request({
    url: '/images/'+id+'/start/',
    method: 'get'
  })
}

export function ContainerHisory(page) {
  if(page === undefined || page === null || page < 1){
    page = 1
  }
  return request({
    url: '/container/?page='+page,
    method: 'get',
  })
}

export function ContainerDelete(id) {
  return request({
    url: '/container/'+id+'/delete/',
    method: 'delete'
  })
}

export function ContainerStop(id,expire) {
  if(expire === undefined || expire == null){
    expire = false
  }
  return request({
    url: '/container/'+id+'/stop/?expire='+expire,
    method: 'get'
  })
}

export function SubFlag(id,flag) {
  return request({
    url: '/container/'+id+'/flag/?flag='+flag,
    method: 'get',
  })
}

export function ContainerStart(id) {
  return request({
    url: '/container/'+id+'/start/',
    method: 'get'
  })
}

export function ImgDashboard(data,flag,page,temp,type,rank) {
  if(data === undefined){
    data = ""
  }
  if(rank === undefined || rank == null){
    rank = 0.0
  }
  if(type === undefined || type == null){
    type = ""
  }
  if(page === undefined || page == null){
    page =1
  }
  let url = "/img/dashboard/?query="+data+"&page="+page+'&rank='+rank+'&type='+type
  let paramFlag = ""
  if(flag === true){
    paramFlag = "flag"
    url += "&flag="+paramFlag
  }
  let tempFlag =""
  if(temp === true){
    tempFlag = "temp"
    url += "&temp="+tempFlag
  }
  return request({
    url: url,
    method: 'get'
  })
}

export function getWriteup(id) {
  return request({
    url: '/get_writeup/?id='+id,
    method: 'get'
  })
}

export function getversion(){
  return request({
    url: '/get_version/',
    method: 'get'
  })
}
