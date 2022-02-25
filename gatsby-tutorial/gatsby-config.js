/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
 
  siteMetadata:{
title: 'Simpy Recipes',
description: 'Nice and clean recipes site',
author: '@nourhammoud',
person:{name:'nour', age:25},
simpleData:['item 1', 'item 2'],
complexData:[
{name:'nour', age:25},
{name:'suzan', age:21}
]
  },
  
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`],
}
