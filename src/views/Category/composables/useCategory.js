import { ref, onMounted } from "vue"
import { getCategoryAPI } from "@/apis/category"
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()//调用useRoute得到一个路由对象，借此来获取路由参数
  const getCategoryData = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategoryData())

  //路由变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    console.log("路由变");
    //问题：使用最新的路由参数请求最新的分类数据
    //故应该将新的参数传过去，借助to(目标路由)
    //又因为原来是在getCategoryAPI(route.params.id)里面传参，所以，给修改getCategoryData（）使得它也有一个参数id，且
    //默认为route.params.id，让getCategoryAPI(id)接受getCategoryData（id)里面的id作为参数
    getCategoryData(to.params.id)
  })

  return {
    categoryData
  }
}
