const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;



module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@store': path.join(__dirname, 'src/store'),
                'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
            }
        },

        plugins: [
                new PrerenderSPAPlugin({
                    // Required - The path to the webpack-outputted app to prerender.
                    staticDir: path.join(__dirname, 'dist'),
                    // Required - Routes to render.
                    routes: [ '/', '/contact', '/gallery', '/skills', '/blog', '/404'],
                    renderer: new PuppeteerRenderer({
                        renderAfterElementExists: '#app'
                    }),
                })
        ]

    }
};