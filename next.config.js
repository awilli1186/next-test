const path = require('path')
const defaultImageSizes = [320, 480, 768, 1024, 1280]

const nextConfig = {
    images: {
        deviceSizes: [
            ...defaultImageSizes,
            ...defaultImageSizes.map(size => size * 2),
        ],
        domains: ['sf-storage-2.nyc3.cdn.digitaloceanspaces.com'],
    },
    webpack(config) {
        config.resolve.alias['@'] = path.resolve(__dirname)
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = nextConfig
