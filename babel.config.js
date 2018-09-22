module.exports = function () {
    const presets = [ '@vue/app' ];
    const plugins = [ "@babel/plugin-syntax-dynamic-import" ];

    return {
        presets,
        plugins
    };
};