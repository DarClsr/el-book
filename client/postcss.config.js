
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
    },
};