module.exports = {
  siteMetadata: {
    title: `Samantha Stang · Hair Stylist`,
    description: `Stylist and Color Expert at Umbrella Salon in San Jose, California. Book now for your next cut, color or styling appointment.`,
    url: `https://www.sbstanghair.com`,
    image: `/images/seo-image.jpg`,
    instagramUsername: `sbstanghair`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sbstang-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles']
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "11857677.1677ed0.2a1c808a3ec3471dbfabe78d864da2e8"
      }
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `sbstanghair`,
    //     access_token: "11857677.1677ed0.2a1c808a3ec3471dbfabe78d864da2e8",
    //     instagram_id: "11857677",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
