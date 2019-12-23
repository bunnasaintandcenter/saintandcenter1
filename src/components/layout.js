import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import SectionHeader from "./sectionHeader"

import "./layout.css"

const Wrapper = styled.div`
  /* transition: 0.2 all ease-in-out; */
`

const theme = {
  color: {
    gold: "rgb(238,184,5)",
    forest: "rgb(0,51,37)",
    green: "rgb(0, 162, 123)",
    crimson: "rgb(139,41,4)",
    eggplant: "rgb(38,33,97)",
    darkBlue: "rgb(38,33,97)",
    blue: "rgb(167,201,253)",
    brown: "rgb(202, 178, 140)",
  },
}

const renderTitle = page => {
  const pagePath = page.split("/")[1]

  switch (true) {
    case page.split("/")[2] === "product":
      return (
        <>
          <Link to="/shop">Shop </Link> / {page.split("/")[3]}
        </>
      )
    case pagePath === "shop":
      return "Shop / Products"
    case pagePath === "holy-hemp":
      return "Learn"
    case pagePath === "human-rites":
      return "Learn"
    case pagePath === "about":
      return "About"
    case pagePath === "account":
      return "Account"
    case pagePath === "faqs":
      return "FAQS"
    case pagePath === "order-received":
      return "Order Recieved"
    default:
      return false
  }
}

const Layout = ({ children, location }) => {
  const cart = useSelector(state => state.cart)

  // const handleToggleAnnouncement = () => {
  //   const storageObj = { timestamp: new Date().getTime() }
  //   localStorage.setItem("sc-hide-announcement", JSON.stringify(storageObj))
  //   toggleBanner()
  // }

  return (
    <ThemeProvider theme={theme}>
      <Helmet title="Saint and Center">
        <script>
          {`
            window.omnisend = window.omnisend || [];
            omnisend.push(["accountID", "5d6d46aa8653ed0357cf4de1"]);
            omnisend.push(["track", "$pageViewed"]);
            !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisrc.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
          `}
        </script>
      </Helmet>
      <Wrapper
        data-testid="layout"
        home={
          location &&
          (location.pathname === "/" || location.pathname === "/shop/pets")
        }
      >
        <Header
          cart={cart}
          home={
            location &&
            (location.pathname === "/" || location.pathname === "/shop/pets")
              ? true
              : false
          }
        />
        {location &&
          (location.pathname !== "/" && location.pathname !== "/shop/pets") && (
            <SectionHeader title={renderTitle(location.pathname)} />
          )}
        {children}
        <Footer location={location} />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
