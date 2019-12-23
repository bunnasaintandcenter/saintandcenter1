import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  width: 90vw;
  margin: 6rem auto;
  font-weight: 300;

  @media ${device.laptop} {
    width: auto;
    margin: 218px 162px 162px;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.075em;
    font-size: 30px;
    margin: 0 0 3rem;

    @media ${device.laptop} {
      letter-spacing: 0.075em;
      font-size: 48px;
      margin: 0 0 4rem;
    }
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
    font-size: 16px;
    line-height: 2em;

    @media ${device.laptop} {
      font-size: 20;x;
    }
  }
`

const Terms = ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <h2>Terms of Use</h2>
      <p>
        This website is owned and operated by Noahfunk LLC and are the supplier
        of the goods featured. The use of this website is governed by the
        policies, terms and conditions (the “terms”) set forth below. You should
        only access and use this website once you have read, accepted, and
        agreed to comply with the terms. Your use of this website including for
        the purposes of placing an order, registering an account or signing up
        to receive our emails is deemed to be your acceptance of the terms. If
        you do not agree with any of the terms, do not access or use this
        website. These terms shall supersede any subsequent terms or conditions
        included with any purchase order, whether or not those terms or
        conditions are signed by us.
      </p>
      <p>DISCLAIMER</p>
      <p>
        The information provided on this website is for educational purposes
        only and is not intended to treat, cure, prevent or, diagnose any
        disease or condition. The statements regarding the products sold on this
        website have not been evaluated by the US Food and Drug Administration
        (FDA). The efficacy of these products has not been confirmed by
        FDA-approved research. The products on this site are not intended to
        diagnose, treat, cure, or prevent any disease. If pregnant or nursing,
        or are suffering from any medical condition, consult a healthcare
        practitioner before use. Discontinue use of our products if you
        experience discomfort or other indications that the product may not be
        appropriate for your individual body chemistry.
      </p>
      <p>
        Information, statements, and reviews regarding products have not been
        evaluated by the Food and Drug Administration. Results vary person to
        person, and there is no guarantee of specific results. We assume no
        liability for inaccuracies or misstatements about products. The
        information and products contained on this website are not intended to
        diagnose, treat or cure any disease. You are advised to consult with
        your healthcare practitioner prior to use. This product is not for use
        by or sale to persons under the age of 18. This product should be used
        only as directed on the label. It should not be used if you are pregnant
        or nursing. Consult with a physician before use if you have a serious
        medical condition or use prescription medications. A Doctor's advice
        should be sought before using this and any supplemental dietary product.
        We do not sell or distribute any products that are in violation of the
        United States Controlled Substances Act. All products contain 0% T H C
        and are legal in all 50 states of the U.S.A.
      </p>
      <p>
        <strong>
          Noahfunk LLC shall not be held liable for any direct or indirect
          damages caused in any way through the use of information or services
          on this website. This includes but is not limited to procurement or
          substitute goods or services; loss of use, data, or profits; or
          business interruption. This disclaimer of liability applies to any
          damages or injury which may be perceived by you, the website user, to
          be caused by the information or services on this website, or by using
          this website.
        </strong>
        BY ACCESSING THIS SITE, COMPLETING THE REGISTRATION PROCESS, AND/OR
        BROWSING THE SITE, AND/OR PURCHASING PRODUCTS FROM THE SITE, YOU ARE
        INDICATING YOUR ACKNOWLEDGMENT AND ACCEPTANCE OF THIS DISCLAIMER AND
        THESE TERMS OF SERVICE.
      </p>
      <p>TERMS OF SERVICE</p>
      <p>OVERVIEW</p>
      <p>
        This website is operated by Noahfunk LLC . Throughout the site, the
        terms “we”, “us” and “our” refer to Noahfunk LLC . Noahfunk LLC offers
        this website, including all information, tools and services available
        from this site to you, the user, conditioned upon your acceptance of all
        terms, conditions, policies and notices stated here.
      </p>
      <p>
        By visiting our site and/ or purchasing something from us, you engage in
        our “Service” and agree to be bound by the following terms and
        conditions (“Terms of Service”, “Terms”), including those additional
        terms and conditions and policies referenced herein and/or available by
        hyperlink. These Terms of Service apply to all users of the site,
        including without limitation users who are browsers, vendors, customers,
        merchants, and/ or contributors of content.
      </p>
      <p>
        Please read these Terms of Service carefully before accessing or using
        our website. By accessing or using any part of the site, you agree to be
        bound by these Terms of Service. If you do not agree to all the terms
        and conditions of this agreement, then you may not access the website or
        use any services. If these Terms of Service are considered an offer,
        acceptance is expressly limited to these Terms of Service.
      </p>
      <p>
        Any new features or tools which are added to the current store shall
        also be subject to the Terms of Service. You can review the most current
        version of the Terms of Service at any time on this page. We reserve the
        right to update, change or replace any part of these Terms of Service by
        posting updates and/or changes to our website. It is your responsibility
        to check this page periodically for changes. Your continued use of or
        access to the website following the posting of any changes constitutes
        acceptance of those changes.
      </p>
      <p>ONLINE STORE TERMS</p>
      <p>
        By agreeing to these Terms of Service, you represent that you are at
        least the age of majority in your state or province of residence, or
        that you are the age of majority in your state or province of residence
        and you have given us your consent to allow any of your minor dependents
        to use this site.
      </p>
      <p>
        You may not use our products for any illegal or unauthorized purpose nor
        may you, in the use of the Service, violate any laws in your
        jurisdiction (including but not limited to copyright laws).
      </p>
      <p>
        You must not transmit any worms or viruses or any code of a destructive
        nature.
      </p>
      <p>
        A breach or violation of any of the Terms will result in an immediate
        termination of your Services.
      </p>
      <p>GENERAL CONDITIONS</p>
      <p>
        We reserve the right to refuse service to anyone for any reason at any
        time.
      </p>
      <p>
        You understand that your content (not including credit card
        information), may be transferred unencrypted and involve (a)
        transmissions over various networks; and (b) changes to conform and
        adapt to technical requirements of connecting networks or devices.
        Credit card information is always encrypted during transfer over
        networks.
      </p>
      <p>
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any
        portion of the Service, use of the Service, or access to the Service or
        any contact on the website through which the service is provided,
        without express written permission by us.
      </p>
      <p>
        The headings used in this agreement are included for convenience only
        and will not limit or otherwise affect these Terms.
      </p>
    </Wrapper>
  </Layout>
)

export default Terms
