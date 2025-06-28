//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        //console.log("el" + el);//el 指的是指令绑定的那个元素 这里就是img
        //binding.value 是指令等于号后面绑定的表达式的值。这里就是图片的url地址
        //console.log("binding" + binding);
        const { stop } = useIntersectionObserver(
          el,//监听的元素
          ([{ isIntersecting }]) => {
            // isIntersecting布尔值，表示监听的元素是否进入到视口区域
            console.log(isIntersecting);
            if (isIntersecting) {
              el.src = binding.value
              //stop是useIntersectionObserver返回的一个方法
              //当图片进入视口区域且已加载完毕之后调用stop方法停止对目标元素的监视，以防止资源浪费
              stop()
            }
          },
        )
      }
    })
  }
}
