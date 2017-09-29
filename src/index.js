/**
 * Created by virus_zhh on 2017/9/30.
 */
import VTreeSelect from './treeselect.vue'

var component = {
  install(Vue){
    Vue.component(VTreeSelect.name, VTreeSelect)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(component);
}

export default component