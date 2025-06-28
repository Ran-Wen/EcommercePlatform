//axios基础的封装
import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useUserStore } from "@/stores/userStore";
import router from "@/router";
const httpInstance = axios.create({
  //接口基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000  //接口超时时间
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  ///从pinia获取token数据
  const userStore = useUserStore()
  //按照后端的要求拼接数据
  const token = userStore.userData.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一的错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  //401token失效处理
  if (e.response.status == 401) {
    const userStore = useUserStore()
    userStore.clearUser()//清空数据
    router.push('/login')//跳转登录页面
  }
  return Promise.reject(e)
})

export default httpInstance