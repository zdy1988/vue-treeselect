/**
 * Created by virus_zhh on 2017/9/30.
 */
import VTreeSelect from './treeselect.vue'

VTreeSelect.install = function(Vue){
  Vue.component(VTreeSelect.name, VTreeSelect)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VTreeSelect);
}

export default VTreeSelect