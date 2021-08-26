module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/b2gsoft/home',
        permanent: false,
      },
    ]
  },
}
