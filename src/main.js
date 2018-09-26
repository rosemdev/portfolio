import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "./routes"
import PrismicVue from 'prismic-vue'
import linkResolver from '../link-resolver'
import resolveViews from "./utils/resolveViews"


Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes: resolveViews(routes, componentName => import(`./${componentName}`)),
    mode: 'history',
});


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
