const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWcProductsCategories {
        edges {
          node {
            id
            slug
            name
            description
            products {
              id
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 80) {
                      src
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
                bulk_cbd_lab_results {
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
                price
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
