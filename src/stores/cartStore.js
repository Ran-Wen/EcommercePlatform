import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart";
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userData.token)
  //获取最新购物车列表
  const findNewCartList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  //添加
  const addCart = async (goodData) => {
    //添加购物车操作
    //已添加过，count++
    //没有添加过，直接push
    if (isLogin.value) {
      const { skuId, count } = goodData
      //登录之后的加入购物车逻辑
      //调用加入购物车接口
      await insertCartAPI({ skuId, count })
      //调用获取购物车列表接口，用接口购物车列表覆盖本地购物车列表
      findNewCartList()
    } else {
      const item = cartList.value.find((item) => item.skuId === goodData.skuId)
      if (item) {
        item.count += goodData.count
      } else {
        cartList.value.push(goodData)
      }
    }

  }

  //删除
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      findNewCartList()
    } else {
      const idx = cartList.value.findIndex((item) => item.skuId === skuId)
      cartList.value.splice(idx, 1)
    }

  }
  //清空购物车
  const clearCart = () => {
    cartList.value = []
  }
  //计算属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  const allSelectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
  const allSelectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  //修改selected的值
  const updatedSelected = (skuId, selected) => {
    //根据传入的skuID的值找到要修改那一个商品的selected
    const item = cartList.value.find((item) => item.skuId == skuId)
    item.selected = selected
  }

  //全选
  const allCheck = (selected) => {
    cartList.value.forEach((item) => item.selected = selected)
  }
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    isAll,
    allSelectedCount,
    allSelectedPrice,
    updatedSelected,
    allCheck,
    clearCart,
    findNewCartList
  }
}, {
  persist: true
})
