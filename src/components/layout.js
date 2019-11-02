import React, { useState } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Announcement from './announcement'
import Header from './header'
import Footer from './footer'
import { device } from '../utils/devices'
import Helmet from 'react-helmet'
import SectionHeader from './sectionHeader'

import "./layout.css"

const Wrapper = styled.div`
  /* transition: 0.2 all ease-in-out; */
  padding-top: ${props => props.bannerOpen ? props.home ? `calc(2rem + 1.5vw)` : `calc(1.5vw + 2rem + 74px)` : `0`};

  @media ${device.laptop}{
    padding-top: ${props => props.bannerOpen ? props.home ? `calc(1.5vw + 2rem)` : `calc(4vw + 4rem + 16px)` : `0`};
  }
`;

const theme = {
  color: {
    gold: 'rgb(239,181,8)',
    forest: 'rgb(0,51,37)',
    green: 'rgb(0, 162, 123)',
    crimson: 'rgb(139,41,4)',
    eggplant: 'rgb(38,33,97)',
    darkBlue: 'rgb(38,33,97)',
    blue: 'rgb(167,201,253)'
  }
}

const renderTitle = (page) => {
  console.log(page.split('/')[2] === 'product')
  switch (true) {
    case page.split('/')[2] === 'product':
      return `Shop / ${page.split('/')[3]}`
    case page.split('/')[1] === 'shop':
      return 'Shop / Products'
    case page.split('/')[1] === 'holy-hemp':
      return 'Learn'
    case page.split('/')[1] === 'account':
      return 'Account'
    default:
      return false
  }
}

const Layout = ({ children, location }) => {

  const cart = useSelector(state => state.cart)

  console.log('location', location)

  const [bannerOpen, toggleBanner] = useState(true)

  const handleToggleAnnouncement = () => {
    const storageObj = { timestamp: new Date().getTime()};
    localStorage.setItem('sc-hide-announcement', JSON.stringify(storageObj))
    toggleBanner()
  }

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
          <Helmet title='Saint and Center'>
            <script>
              {`
                window.omnisend = window.omnisend || [];
                omnisend.push(["accountID", "5d6d46aa8653ed0357cf4de1"]);
                omnisend.push(["track", "$pageViewed"]);
                !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisrc.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
              `}
            </script>
          </Helmet>
          <Wrapper bannerOpen={bannerOpen} home={location && location.pathname === '/'}>
            <Announcement
              text='Free Shipping on All Orders'
              toggle={handleToggleAnnouncement}
              open={bannerOpen} />
            <Header bannerOpen={bannerOpen} cart={cart} home={location && location.pathname === '/' ? true : false} />
            {location && location.pathname !== '/' &&
              <SectionHeader title={renderTitle(location.pathname)} />
            }
            {children}
            <Footer />
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
