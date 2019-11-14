import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import PropTypes from "prop-types"

const Menu = styled.div`
  cursor: pointer;
  grid-column: span 2;
  border-bottom: 2px solid rgb(51, 51, 51);
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => (props.large ? `2rem` : `1rem`)};
  font-weight: 200;
  text-transform: uppercase;
  transition: 0.2s all ease-in-out;
  font-size: ${props => (props.large ? `20px` : `16px`)};

  @media ${device.laptop} {
    font-size: ${props => (props.large ? `48px` : `16px`)};
    padding: ${props => (props.large ? `4rem` : `1rem 4rem`)};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 18px;
    font-weight: 200;
    transform: ${props => (props.expanded ? `rotate(45deg)` : `rotate(0)`)};
    transition: 0.2s all ease-in-out;

    @media ${device.laptop} {
      font-size: 48px;
    }
  }
`

const Content = styled.div`
  padding: ${props =>
    props.padded ? (props.expanded ? `1rem 4rem` : `0 4rem`) : `0`};
  overflow: hidden;
  max-height: ${props => (props.expanded ? `999px` : 0)};
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  box-sizing: border-box;

  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    svg {
      margin-right: 0.5rem;
    }
  }
`

const Expandable = ({ title, children, large, padded }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Menu data-testid="expandable" className="expandable">
      <Title
        className="expandable-title"
        expanded={expanded}
        large={large}
        onClick={() => setExpanded(!expanded)}
      >
        {title} <span>+</span>
      </Title>
      <Content
        className="expandable-content"
        padded={padded}
        expanded={expanded}
      >
        {children}
      </Content>
    </Menu>
  )
}

Expandable.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  large: PropTypes.bool,
  padded: PropTypes.bool,
}

export default Expandable
