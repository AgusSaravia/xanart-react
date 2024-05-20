/** @type {import('next').NextConfig} */
// next.config.js
const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        return config;
    },
    images: {
        disableStaticImages: true,
        formats: ['image/webp'],
    },
});