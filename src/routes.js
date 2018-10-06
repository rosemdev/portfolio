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
        },
    },
    {
        path: '/contact',
        components: {
            default: "views/Contact",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/skills',
        components: {
            aside: "partials/Aside",
            default: "views/Skills",
        },
        meta: {
            layout: "layouts/TwoColumnsLayout",
        },
    },
    {
        path: '/blog',
        components: {
            underHeader: "partials/GradientBlog",
            default: "views/ArticlesListPage",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/blog/:article',
        name: 'article',
        components: {
            underHeader: "partials/GradientArticle",
            default: "views/Article",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        name: 'NotFound',
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