import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
// import Popper from 'vue-popperjs';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
Vue.use(VueMaterial)
// Vue.use(Popper)
Vue.loadScript('./js/core/jquery.min.js')
Vue.loadScript('./js/core/popper.min.js')
Vue.loadScript('./js/core/bootstrap-material-design.min.js')
Vue.loadScript('./js/plugins/perfect-scrollbar.jquery.min.js')
Vue.loadScript('./js/material-dashboard.js?v=2.1.1')
Vue.loadScript('./js/material-dashboard-localextension.js')

new Vue({
  render: h => h(App)
}).$mount('#app')
