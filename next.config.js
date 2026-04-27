module.exports = {
  output: 'export',
  distDir: 'docs', 
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : ''
}