module.exports = {
  siteMetadata: {
    title: `Saint & Center`,
    description: `We’ve reimagined the power of hemp to extract cbd with a higher calling - saving the earth, restoring equality. It’s hemp for humans who levitate, create, vibrate.`,
    author: `@saintandcenter`,
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
    {
      resolve: "gatsby-source-wordpress",
      baseUrl: "andnone.co/saintcenter",
      protocol: "http",
      hostingWPCOM: false,
      useACF: true,
      auth: {
        jwt_user: process.env.JWT_USER,
        jwt_pass: process.env.JWT_PASS,
        jwt_base_path: "/jwt-auth/v1/token"
      },
    },
    {
      resolve: "@massivdash/gatsby-source-woocommerce",
      options: {
      api: 'andnone.co/saintcenter',
      itemCount: 20,
      https: false,
        api_keys: {
          consumer_key: process.env.WOOCOMMERCE_KEY,
          consumer_secret: process.env.WOOCOMMERCE_SECRET,
        },
        fields: ['products']
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}