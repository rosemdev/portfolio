export const routes = [
    {
        path: '/',
        name: 'homepage',
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
        name: 'gallery',
        components: {
            underHeader: "partials/GradientGallery",
            default: "views/Gallery",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/gallery1',
        name: 'gallery',
        components: {
            underHeader: "partials/GradientGallery",
            default: "views/Gallery1",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/contact',
        name: 'contact',
        components: {
            default: "views/Contact",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/skills',
        name: 'skills',
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
        name: 'blog',
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
        path: '/404',
        name: 'NotFound',
        component: "views/404",
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/thankyou',
        name: 'ThankYou',
        component: "views/ThankYouPage",
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '/projects',
        name: 'Projects',
        components: {
            underHeader: "partials/GradientProjects",
            default: "views/Projects",
        },
        meta: {
            layout: "layouts/OneColumnLayout",
        },
    },
    {
        path: '*',
        redirect: '/404'
    },

];