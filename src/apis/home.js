import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI(params = {}) {
  //默认是1，商品是2
  //从对象 params 中提取属性 distributionSite，并赋值给同名变量
  //distributionSite = '1' 指定当 params 中不存在 distributionSite 属性，或其值为 undefined 时，使用默认值 '1'。
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    method: 'get',
    url: '/home/hot'
  })
}
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}