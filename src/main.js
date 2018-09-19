import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "./routes"
import PrismicVue from 'prismic-vue'
import linkResolver from '../link-resolver'


Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
