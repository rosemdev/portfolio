const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@store': path.join(__dirname, 'src/store'),
                'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
            }
        }
    }
};