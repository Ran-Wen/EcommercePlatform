
import ImageView from '@/components/ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'
//全局组件注册
export const componentPlugin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}