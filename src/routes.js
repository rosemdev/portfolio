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
        path: '/gallery',
        components: {
            underHeader: "partials/GradientGallery",
            default: "views/Gallery",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        }
    },
    // {
    //     path: '/skills',
    //     components: {
    //         aside: "partials/Aside",
    //         default: "views/Skills",
    //     },
    //     meta: {
    //         layout: "layouts/TwoColumnsLayout",
    //     },
    // },
    // {
    //     path: '/contact',
    //     component: "views/Contact",
    //     meta: {
    //         layout: "layouts/OneColumnLayout",
    //     },
    // },

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