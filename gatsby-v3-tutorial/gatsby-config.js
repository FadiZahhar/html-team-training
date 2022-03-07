/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'simply recipes',
    description: 'nice and clean recipes site',
    author: 'Ali El-Helbawi',
    person: {
      name: 'Ali',
      age: 30,
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {
        name: 'Ali',
        age: 30,
      },
      {
        name: 'Alaa',
        age: 31,
      }
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
