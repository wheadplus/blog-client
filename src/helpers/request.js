import axios from 'axios'
import { Message } from 'element-ui'

//axios默认请求类型,URL,跨域是否请求cookies
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

//封装axios,返回Promise
export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    //url，type处理
    let option = {
      url,
      method: type
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    //调用axios,用promise处理数据
    axios(option).then(res => {
      //console.log(res.data)
      if(res.data.status === 'ok') {
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}

