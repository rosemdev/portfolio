import OneColumnLayout from "./layouts/OneColumnLayout"
// import TwoColumnsLayout from "./layouts/TwoColumnsLayout"
import Homepage from './views/Homepage'
import Gallery from './views/Gallery'
import HelloWorld from './views/HelloWorld'
import Gradient from "./components/Gradient"
import GradientHomepage from "./partials/GradientHomepage"
import GradientGallery from "./partials/GradientGallery"

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
            underHeader: Gradient,
            default: HelloWorld,
        },
        meta: {
            layout: OneColumnLayout,
        },
    },
];