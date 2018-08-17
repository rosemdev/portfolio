import OneColumnLayout from "./layouts/OneColumnLayout"
import TwoColumnsLayout from "./layouts/TwoColumnsLayout"
import Homepage from './views/Homepage'
import HelloWorld from './views/HelloWorld'
import Gradient from "./components/Gradient"
import GradientHomepage from "./partials/GradientHomepage"

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
        component: HelloWorld,
        meta: {
            layout: TwoColumnsLayout,
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