import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  padding-top: 56px;
  width: 90vw;
  margin: 0 auto;
  padding-top: 24px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.075em;
    font-size: 30px;
    margin: 0 0 3rem;

    @media ${device.laptop} {
      letter-spacing: 0.075em;
      font-size: 48px;
      margin: 0 0 4rem;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media ${device.laptop} {
    padding: 100px 0;
  }
`

const List = styled.ul`
  list-style: none;
  font-weight: 300;
  padding: 0;
  max-width: 600px;
  margin: 0 auto 48px;
  border: 1px solid black;

  li {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 24px;
    border-bottom: 1px solid black;

    &:last-of-type {
      border: 0;
    }
  }
`

const LabResults = ({ location }) => {
  const data = useStaticQuery(graphql`
    query LabResultsQuery {
      allWcProductsCategories(filter: { wordpress_id: { nin: [25, 15] } }) {
        edges {
          node {
            name
            id
            products {
              acf {
                product_lab_results {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <Wrapper>
        <h2>Lab Results</h2>
        <List>
          {data.allWcProductsCategories.edges.map(({ node }) => {
            const { name, id, products } = node
            return (
              <li key={id}>
                <span>{name}</span>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={products[1].acf.product_lab_results.url}
                >
                  Download Lab Results
                </a>
              </li>
            )
          })}
        </List>
      </Wrapper>
    </Layout>
  )
}

export default LabResults
