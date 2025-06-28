import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user';
import { ref } from "vue";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore('user', () => {

  let userData = ref({})
  const cartStore = useCartStore()
  const getUser = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userData.value = res.result
    //登录时合并购物车
    await mergeCartAPI(cartStore.cartList.map(
      item => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }
    ))
    //获取最新的购物车列表
    cartStore.findNewCartList()
  }

  //清空用户信息
  const clearUser = () => {
    userData.value = {}
    //退出时，清空购物车
    cartStore.clearCart()
  }
  return {
    userData,
    getUser,
    clearUser
  }
},
  // 持久化配置
  {
    persist: true
  }
)