const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWcProductsCategories(filter: { wordpress_id: { nin: [25, 15] } }) {
        edges {
          node {
            id
            slug
            name
            description
            products {
              id
              purchase_note
              menu_order
              images {
                localFile {
                  childImageSharp {
                    fluid(quality: 100, fit: COVER, toFormatBase64: WEBP) {
                      src
                      srcSetWebp
                      base64
                    }
                  }
                }
              }
              wordpress_id
              sku
              acf {
                product_lab_results {
                  url
                }
              }
              name
              description
              short_description
              product_variations {
                attributes {
                  option
                }
                image {
                  localFile {
                    childImageSharp {
                      fluid(quality: 100, fit: COVER, toFormatBase64: WEBP) {
                        src
                        srcSetWebp
                        base64
                      }
                    }
                  }
                }
                price
                sale_price
                sku
                id
              }
            }
          }
        }
      }
    }
  `)

  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  result.data.allWcProductsCategories.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `shop/product/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(categoryTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        name: edge.node.name,
        image: edge.node.image,
        images: edge.node.images,
        description: edge.node.description,
        products: edge.node.products,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-text-transition/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
