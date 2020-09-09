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
import objectFitImages from 'object-fit-images'
import Meta from 'vue-meta'
import NProgress from 'nprogress'
import Loader from '../src/components/Loader'
import notFound from '../src/views/404'
import './registerServiceWorker'
import dialMouseTargetDirective from './directives/dialMouseTarget'

NProgress.configure({ showSpinner: false });


Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver: linkResolver,
    htmlSerializer: htmlSerializer
});

Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(Meta);

const router = new VueRouter({
    routes: resolveViews(routes, (componentName) => ({
        // import(`./${componentName}`);

        // The component to load (should be a Promise)
            component: import(`./${componentName}`),
            // A component to use while the async component is loading
            loading: Loader,
            // A component to use if the load fails
            error: notFound,
            // Delay before showing the loading component. Default: 200ms.
            delay: 0,
            // The error component will be displayed if a timeout is
            // provided and exceeded. Default: Infinity.
            timeout: 10000
    })),
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

// eslint-disable-next-line
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

// eslint-disable-next-line
router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done();
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
Vue.directive('dial-mouse-target', dialMouseTargetDirective);

Vue.config.productionTip = false;

const root = new Vue({
    router,
    store,
    render: h => h(App)
});

document.addEventListener('DOMContentLoaded', function () {
    root.$mount('#app');
    objectFitImages();

});
