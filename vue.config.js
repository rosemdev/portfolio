const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;
const productionPlugins = [
    new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/', '/contact', '/gallery', '/skills', '/blog', '/404'],
        renderer: new PuppeteerRenderer({
            renderAfterElementExists: '#app'
        }),
    }),
];


module.exports = {
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(...productionPlugins);
        }

        Object.assign(config.resolve.alias, {
            '@resources': path.join(__dirname, 'resources'),
            '@store': path.join(__dirname, 'src/store'),
            '@utils': path.join(__dirname, 'src/utils'),
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        });
    },

    pwa: {
        name: 'rosem portfolio',
        themeColor: '#333',
        msTileColor: '#333',
        appleMobileWebAppStatusBarStyle: '#333',
        iconPaths: {
            msTileImage: 'img/icons/mstile-150x150.png'
        }
    }
};
