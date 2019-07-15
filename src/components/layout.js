import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'

import "./layout.css"

const theme = {
  color: {
    gold: 'rgb(239,181,8)',
    forest: 'rgb(0,51,37)',
    green: 'rgb(0, 162, 123)',
    crimson: 'rgb(139,41,4)',
    eggplant: 'rgb(38,33,97)'
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
