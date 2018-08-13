import OneColumnLayout from "./layouts/OneColumnLayout"
import TwoColumnsLayout from "./layouts/TwoColumnsLayout"
import Homepage from './views/Homepage'
import HelloWorld from './views/HelloWorld'
import GradientScreen from "./components/GradientScreen"

export const routes = [
    {
        path: '/',
        components: {
            underHeader: GradientScreen,
            default: Homepage,
        },
        meta: {
            layout: OneColumnLayout,
        },
    },
    {
        path: '/hello',
        component: HelloWorld,
        meta: {
            layout: TwoColumnsLayout,
        }
    }
];