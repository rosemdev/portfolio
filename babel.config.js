module.exports = function (api) {
    api.cache(true);
    const presets = ['@vue/app'];
    const plugins = ["@babel/plugin-syntax-dynamic-import",
        ["prismjs", {
            languages: ["javascript", "css", "markup"],
            plugins: ["line-numbers"],
            theme: "tomorrow",
            css: true
        }]
    ];

    return {
        presets,
        plugins
    };
};