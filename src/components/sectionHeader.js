import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  background: white;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 74px;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(51, 51, 51);
  font-weight: 100;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  a {
    color: rgb(51, 51, 51);
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  }

  @media ${device.laptop} {
    top: calc(2.5vw + 2rem);
  }
`

const SectionHeader = ({ title, secondary }) => {
  return (
    <Wrapper data-testid="section-header">
      <span data-testid="section-header-title">{title}</span>
      <span data-testid="section-header-secondary">{secondary}</span>
    </Wrapper>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  secondary: PropTypes.string,
}

export default SectionHeader
