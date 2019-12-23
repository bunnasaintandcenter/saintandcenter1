import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  margin: 218px 162px 162px;
  font-weight: 300;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.075em;
    font-size: 48px;
    margin: 0 0 4rem;
  }

  a {
    color: black;
  }

  ul {
    list-style: none;
    line-height: 2em;
    font-size: 20px;
  }

  p {
    font-size: 20px;
    line-height: 2em;
  }
`

const Privacy = ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        www.saintandcenter.com (the “Site”).
      </p>
      <p>PERSONAL INFORMATION WE COLLECT</p>
      <p>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.”
      </p>
      <p>We collect Device Information using the following technologies:</p>
      <p>
        - “Log files” track actions occurring on the Site, and collect data
        including your IP address, browser type, Internet service provider,
        referring/exit pages, and date/time stamps.
      </p>
      <p>
        - “Web beacons,” “tags,” and “pixels” are electronic files used to
        record information about how you browse the Site.
      </p>
      <p>
        Additionally when you make a purchase or attempt to make a purchase
        through the Site, we collect certain information from you, including
        your name, billing address, shipping address, payment information
        (including credit card numbers, email address, and phone number. We
        refer to this information as “Order Information.”
      </p>
      <p>
        When we talk about “Personal Information” in this Privacy Policy, we are
        talking both about Device Information and Order Information.
      </p>
      <p>HOW DO WE USE YOUR PERSONAL INFORMATION?</p>
      <p>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to:
      </p>
      <p>Communicate with you;</p>
      <p>Screen our orders for potential risk or fraud; and</p>
      <p>
        When in line with the preferences you have shared with us, provide you
        with information or advertising relating to our products or services.
      </p>
      <p>
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
      </p>
      <p>SHARING YOUR PERSONAL INFORMATION</p>
      <p>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        WooCommerce to power our online store--you can read more about how
        WooCommerce uses your Personal Information here:{" "}
        <a
          href="https://automattic.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://automattic.com/privacy
        </a>
        . We also use Google Analytics to help us understand how our customers
        use the Site--you can read more about how Google uses your Personal
        Information here:{" "}
        <a
          href="https://www.google.com/intl/en/policies/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.google.com/intl/en/policies/privacy
        </a>
        . You can also opt-out of Google Analytics here:{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout
        </a>
        .
      </p>
      <p>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
      </p>
      <p>BEHAVIOURAL ADVERTISING</p>
      <p>
        As described above, we use your Personal Information to provide you with
        targeted advertisements or marketing communications we believe may be of
        interest to you. For more information about how targeted advertising
        works, you can visit the Network Advertising Initiative’s (“NAI”)
        educational page at
        http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
      </p>
      <p>You can opt out of targeted advertising by:</p>
      <p>COMMON LINKS INCLUDE:</p>
      <ul>
        <li>
          {" "}
          FACEBOOK -{" "}
          <a
            href="https://www.facebook.com/settings/?tab=ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/settings/?tab=ads
          </a>
        </li>
        <li>
          {" "}
          GOOGLE -{" "}
          <a
            href="https://www.google.com/settings/ads/anonymous"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/settings/ads/anonymous
          </a>
        </li>
      </ul>
      <p>
        Additionally, you can opt out of some of these services by visiting the
        Digital Advertising Alliance’s opt-out portal at:{" "}
        <a
          href="http://optout.aboutads.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://optout.aboutads.info.
        </a>
      </p>
      <p>DO NOT TRACK</p>
      <p>
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
      </p>
      <p>YOUR RIGHTS</p>
      <p>
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
      </p>
      <p>
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
      </p>
      <p>DATA RETENTION</p>
      <p>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </p>
      <p>MINORS</p>
      <p>The Site is not intended for individuals under the age of 18.</p>
      <p>CHANGES</p>
      <p>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
      </p>
      <p>INDEMNIFICATION</p>
      <p>
        You agree to defend and indemnify us, and hold us harmless against any
        losses, liabilities, claims, demands, threats, actions, proceedings,
        expenses (including reasonable attorney fees and court costs) in any way
        arising from, related to or in connection with your use of our Website
        including in connection with any products offered through our Website.
      </p>
      <p>CONTACT US</p>
      <p>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at{" "}
        <a href="mailto:hi@saintandcenter">hi@saintandcenter.com</a>
      </p>
    </Wrapper>
  </Layout>
)

export default Privacy
