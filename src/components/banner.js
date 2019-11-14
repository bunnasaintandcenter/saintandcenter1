import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  margin: 6rem auto;
  width: 90vw;
  max-width: 1440px;

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 48px;
  }
`

const Banner = ({ title, image }) => (
  <Wrapper data-testid="banner">
    {title && <h2>{title}</h2>}
    <img src={image} alt={title} />
  </Wrapper>
)

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default Banner
