const postcssConfigs = require('@taoyage/configs/postcss');

module.exports = {
    //   plugins: [
    //     ...postcssConfigs.plugins,
    //     require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'], selectorBlackList: ['html'] }),
    //   ],
    plugins: {
        tailwindcss: {},
        autoprefixer: {
            flexbox: 'no-2009',
        },
        "postcss-image-set-polyfill": require('postcss-image-set-polyfill'),
        "postcss-flexbugs-fixes": require('postcss-flexbugs-fixes'),
        "postcss-preset-env": require('postcss-preset-env'),
        "postcss-normalize": require('postcss-normalize'),
        "postcss-pxtorem": require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'], selectorBlackList: ['html'] })
    },
};