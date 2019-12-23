var proxy = require("http-proxy-middleware")
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Saint & Center`,
    description: `We’ve reimagined the power of hemp to extract cbd with a higher calling - saving the earth, restoring equality. It’s hemp for humans who levitate, create, vibrate.`,
    author: `@saintandcenter`,
  },
  pathPrefix: `/saint`,
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:34567",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `checkout.saintandcenter.com`,
        protocol: "https",
        verbose: true,
        useACF: true,
        hostingWPCOM: false,
        includedRoutes: ["**/faq", "**/products", "**/categories"],
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        api: "checkout.saintandcenter.com",
        itemCount: 20,
        verbose: true,
        useACF: true,
        https: false,
        api_keys: {
          consumer_key: process.env.WOOCOMMERCE_KEY,
          consumer_secret: process.env.WOOCOMMERCE_SECRET,
        },
        fields: ["products", "products/categories"],
      },
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
  ],
}
