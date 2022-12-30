import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "vant/lib/index.css";
import '@/assets/mobile/flexible.js'

import { Tabbar, TabbarItem, NavBar, Grid, GridItem, Image, Icon, Search } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Search);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')