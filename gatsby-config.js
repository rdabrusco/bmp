module.exports = {
  siteMetadata: {
    title: `Boca Medical Practice`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'blog',
      path: `${__dirname}/blog`
    }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'test',
        path: `${__dirname}/test`
      }
      }
  ],
}
