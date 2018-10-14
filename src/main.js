import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import {routes} from "./routes"
import PrismicVue from 'prismic-vue'
import linkResolver from './utils/link-resolver'
import htmlSerializer from './utils/html-serializer'
import resolveViews from './utils/resolveViews'
import truncatingFilter from './utils/truncatingFilter'
import SocialSharing from 'vue-social-sharing'


Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver: linkResolver,
    htmlSerializer: htmlSerializer
});

Vue.use(VueRouter);
Vue.use(SocialSharing);

const router = new VueRouter({
    routes: resolveViews(routes, componentName => import(`./${componentName}`)),
    mode: 'history',
});

Vue.filter('truncating', truncatingFilter);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
