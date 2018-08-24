import OneColumnLayout from "./layouts/OneColumnLayout"
import TwoColumnsLayout from "./layouts/TwoColumnsLayout"
import Homepage from './views/Homepage'
import Gallery from './views/Gallery'
import HelloWorld from './views/HelloWorld'
import Gradient from "./components/Gradient"
import GradientHomepage from "./partials/GradientHomepage"
import GradientGallery from "./partials/GradientGallery"
import Skills from "./views/Skills"
import Aside from "./partials/Aside"


export const routes = [
    {
        path: '/',
        components: {
            underHeader: GradientHomepage,
            default: Homepage,
        },
        meta: {
            layout: OneColumnLayout,
        },
    },
    {
        path: '/gallery',
        components: {
            underHeader: GradientGallery,
            default: Gallery,
        },
        meta: {
            layout: OneColumnLayout,
        }
    },
    {
        path: '/skills',
        components: {
            aside: Aside,
            default: Skills,
        },
        meta: {
            layout: TwoColumnsLayout,
        },
    },
    {
        path: '/contact',
        components: {
            underHeader: Gradient,
            default: HelloWorld,
        },
        meta: {
            layout: OneColumnLayout,
        },
    },

];