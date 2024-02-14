import axios from "axios"
//import Cookies from 'js-cookie'

// 请求超时时间
axios.defaults.timeout = 10000 * 5;

// 请求基础URL
//axios.defaults.baseURL = 'http://172.16.33.233:1728/pie-jeecg';
axios.defaults.baseURL = '/api';
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求携带cookie
axios.defaults.withCredentials = true;


// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
  },
  // 服务器状态码不是200的情况 
  error => {
    if (error) {
      //console.log(error);
      return Promise.reject(error.response);
    }
  }
);
/** 
* get方法，对应get请求 
*/
export function get(url, params, info = '') {
  return new Promise((resolve, reject) => {
    axios.get(url + info, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
/** 
 * post方法，对应post请求 
 * info为 true，formData格式；
 * info为 undefined或false，是json格式
 */
export function post(url, data = {}, info) {
  return new Promise((resolve, reject) => {
    let newData = data
    if (info) {  //  转formData格式
      newData = new FormData();
      for (let i in data) {
        newData.append(i, data[i]);
      }
    }
    axios.post(url, newData)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * 封装put请求
 */

export function put(url, params = {}, info = "") {
  return new Promise((resolve, reject) => {
    axios.put(url + info, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err.data)
      })
  })
}

/**
* 封装delete请求
*/
export function axiosDelete(url, params = {}, info = "") {
  return new Promise((resolve, reject) => {
    axios.delete(url + info, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/**
* 下载文件
*/
export const download = (url, resOpts = {}) => {
const { type = 'get', data = '' } = resOpts;
const queryArgs = {
    url,
    method: type,
    data,
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    withCredentials: true,
    },
    responseType: "blob"
}
// tips: 这里直接返回的是response整体!
return axios.request(queryArgs).catch(err => console.log(err))
}