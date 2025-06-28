import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])//state导航列表数据,响应式数组，后端获取到的数据会存在里面

  //action获取数据的方法
  //调用接口 getCategoryAPI() 获取导航分类数据。将响应结果 res.result 赋值给 categoryList
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
  return {
    getCategory,
    categoryList
  }
})
