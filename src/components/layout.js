import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Header from './header'

import "./layout.css"

const theme = {
  color: {
    gold: 'rgb(239,181,8)',
    forest: 'rgb(14,56,33)',
    crimson: 'rgb(139,41,4)',
    eggplant: 'rgb(42,34,90)'
  }
}

const Layout = ({ children, location }) => (
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
      <div>
        <Header location={location} />
        {children}
      </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
