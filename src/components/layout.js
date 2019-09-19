import React, { useState } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Announcement from './announcement'
import Header from './header'

import "./layout.css"

const Wrapper = styled.div`
  /* transition: 0.2 all ease-in-out; */
  padding-top: ${props => props.bannerOpen ? `calc(1.5vw + 2rem)` : `0`};
`;

const theme = {
  color: {
    gold: 'rgb(239,181,8)',
    forest: 'rgb(0,51,37)',
    green: 'rgb(0, 162, 123)',
    crimson: 'rgb(139,41,4)',
    eggplant: 'rgb(38,33,97)'
  }
}

const Layout = ({ children, location }) => {

  const cart = useSelector(state => state.cart)

  const [bannerOpen, toggleBanner] = useState(true)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <Wrapper bannerOpen={bannerOpen}>
            <Announcement
              text='Free Shipping on Orders over $75'
              toggle={toggleBanner}
              open={bannerOpen} />
            <Header bannerOpen={bannerOpen} cart={cart} />
            {children}
          </Wrapper>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
