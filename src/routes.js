export const routes = [
    {
        path: '/',
        components: {
            underHeader: "partials/GradientHomepage",
            default: "views/Homepage",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/blog',
        components: {
            default: "views/ArticlesListPage",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        }
    },
    {
        path: '/404',
        component: "views/404",
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '*',
        redirect: '/404'
    },

];