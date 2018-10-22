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
import VueAnalytics from 'vue-analytics'


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
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

Vue.use(VueAnalytics, {
    id: 'UA-127776624-1',
    router,

    debug: {
        // enabled: true
    },

    autoTracking: {
        exception: true,
        page: true,
        pageviewOnLoad: true,
    }
});

Vue.filter('truncating', truncatingFilter);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
