import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  grid-area: pets;

  h2 {
    position: absolute;
    color: white;
    top: 24px;
    left: 24px;
    font-weight: 300;
    z-index: 1;
    text-transform: uppercase;
    font-size: 24px;
  }

  .gatsby-image-wrapper {
    height 100%;
  }

  img {
    width: 100%;
    height: 50vw;
    object-fit: cover;
    display: block;
    margin: 0;
  }
`

const PetLink = () => {
  const data = useStaticQuery(graphql`
    query PetLinkQuery {
      file: file(relativePath: { eq: "treats.jpg" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Link to="/shop/pets">
        <h2>CBD for Pets</h2>
        <Img fluid={data.file.childImageSharp.fluid} alt="Pet Products" />
      </Link>
    </Wrapper>
  )
}

export default PetLink
