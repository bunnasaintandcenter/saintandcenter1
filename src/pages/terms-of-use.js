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
      <p>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p>
      <p>
        We are not responsible if information made available on this site is not
        accurate, complete or current. The material on this site is provided for
        general information only and should not be relied upon or used as the
        sole basis for making decisions without consulting primary, more
        accurate, more complete or more timely sources of information. Any
        reliance on the material on this site is at your own risk.
      </p>
      <p dir="ltr">
        This site may contain certain historical information. Historical
        information, necessarily, is not current and is provided for your
        reference only. We reserve the right to modify the contents of this site
        at any time, but we have no obligation to update any information on our
        site. You agree that it is your responsibility to monitor changes to our
        site.
      </p>
      <p dir="ltr">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</p>
      <p dir="ltr">
        Prices for our products are subject to change without notice.
      </p>
      <p dir="ltr">
        We reserve the right at any time to modify or discontinue the Service
        (or any part or content thereof) without notice at any time.
      </p>
      <p dir="ltr">
        We shall not be liable to you or to any third-party for any
        modification, price change, suspension or discontinuance of the Service.
      </p>
      <p dir="ltr">SECTION 5 - PRODUCTS OR SERVICES (if applicable)</p>
      <p dir="ltr">
        Certain products or services may be available exclusively online through
        the website. These products or services may have limited quantities and
        are subject to return or exchange only according to our Return Policy.
      </p>
      <p dir="ltr">
        We have made every effort to display as accurately as possible the
        colors and images of our products that appear at the store. We cannot
        guarantee that your computer monitor's display of any color will be
        accurate.
      </p>
      <p dir="ltr">
        We reserve the right, but are not obligated, to limit the sales of our
        products or Services to any person, geographic region or jurisdiction.
        We may exercise this right on a case-by-case basis. We reserve the right
        to limit the quantities of any products or services that we offer. All
        descriptions of products or product pricing are subject to change at
        anytime without notice, at the sole discretion of us. We reserve the
        right to discontinue any product at any time. Any offer for any product
        or service made on this site is void where prohibited.
      </p>
      <p dir="ltr">
        We do not warrant that the quality of any products, services,
        information, or other material purchased or obtained by you will meet
        your expectations, or that any errors in the Service will be corrected.
      </p>
      <p dir="ltr">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</p>
      <p dir="ltr">
        We reserve the right to refuse any order you place with us. We may, in
        our sole discretion, limit or cancel quantities purchased per person,
        per household or per order. These restrictions may include orders placed
        by or under the same customer account, the same credit card, and/or
        orders that use the same billing and/or shipping address. In the event
        that we make a change to or cancel an order, we may attempt to notify
        you by contacting the e-mail and/or billing address/phone number
        provided at the time the order was made. We reserve the right to limit
        or prohibit orders that, in our sole judgment, appear to be placed by
        dealers, resellers or distributors.
      </p>
      <p dir="ltr">
        You agree to provide current, complete and accurate purchase and account
        information for all purchases made at our store. You agree to promptly
        update your account and other information, including your email address
        and credit card numbers and expiration dates, so that we can complete
        your transactions and contact you as needed.
      </p>
      <p dir="ltr">SECTION 7 - OPTIONAL TOOLS</p>
      <p dir="ltr">
        We may provide you with access to third-party tools over which we
        neither monitor nor have any control nor input.
      </p>
      <p dir="ltr">
        You acknowledge and agree that we provide access to such tools &rdquo;as
        is&rdquo; and &ldquo;as available&rdquo; without any warranties,
        representations or conditions of any kind and without any endorsement.
        We shall have no liability whatsoever arising from or relating to your
        use of optional third-party tools.
      </p>
      <p dir="ltr">
        Any use by you of optional tools offered through the site is entirely at
        your own risk and discretion and you should ensure that you are familiar
        with and approve of the terms on which tools are provided by the
        relevant third-party provider(s).
      </p>
      <p dir="ltr">
        We may also, in the future, offer new services and/or features through
        the website (including, the release of new tools and resources). Such
        new features and/or services shall also be subject to these Terms of
        Service.
      </p>
      <p dir="ltr">SECTION 8 - THIRD-PARTY LINKS</p>
      <p dir="ltr">
        Certain content, products and services available via our Service may
        include materials from third-parties.
      </p>
      <p dir="ltr">
        Third-party links on this site may direct you to third-party websites
        that are not affiliated with us. We are not responsible for examining or
        evaluating the content or accuracy and we do not warrant and will not
        have any liability or responsibility for any third-party materials or
        websites, or for any other materials, products, or services of
        third-parties.
      </p>
      <p dir="ltr">
        We are not liable for any harm or damages related to the purchase or use
        of goods, services, resources, content, or any other transactions made
        in connection with any third-party websites. Please review carefully the
        third-party's policies and practices and make sure you understand them
        before you engage in any transaction. Complaints, claims, concerns, or
        questions regarding third-party products should be directed to the
        third-party.
      </p>
      <p dir="ltr">SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</p>
      <p dir="ltr">
        If, at our request, you send certain specific submissions (for example
        contest entries) or without a request from us you send creative ideas,
        suggestions, proposals, plans, or other materials, whether online, by
        email, by postal mail, or otherwise (collectively, 'comments'), you
        agree that we may, at any time, without restriction, edit, copy,
        publNoahfunk, distribute, translate and otherwise use in any medium any
        comments that you forward to us. We are and shall be under no obligation
        (1) to maintain any comments in confidence; (2) to pay compensation for
        any comments; or (3) to respond to any comments.
      </p>
      <p dir="ltr">
        We may, but have no obligation to monitor, edit or remove content that
        we determine in our sole discretion are unlawful, offensive,
        threatening, libelous, defamatory, pornographic, obscene or otherwise
        objectionable or violates any party&rsquo;s intellectual property or
        these Terms of Service.
      </p>
      <p dir="ltr">
        You agree that your comments will not violate any right of any
        third-party, including copyright, trademark, privacy, personality or
        other personal or proprietary right. You further agree that your
        comments will not contain libelous or otherwise unlawful, abusive or
        obscene material, or contain any computer virus or other malware that
        could in any way affect the operation of the Service or any related
        website. You may not use a false e-mail address, pretend to be someone
        other than yourself, or otherwise mislead us or third-parties as to the
        origin of any comments. You are solely responsible for any comments you
        make and their accuracy. We take no responsibility and assume no
        liability for any comments posted by you or any third-party.
      </p>
      <p dir="ltr">SECTION 10 - ACCESS TO THIS SITE</p>
      <p dir="ltr">
        You must be eighteen (18) years or older to use this Site and to
        purchase goods or services on this Site.&nbsp;If you are under eighteen
        (18) years of age, you are not permitted to access this Site for any
        reason. By using this Site (and, thus, agreeing to the Terms and
        Conditions) you warrant and represent that you are at least eighteen
        (18) years of age. We reserve the right to request a scan of any
        customer&rsquo;s photo ID for age verification before shipping an order.
        Due to the age restrictions for use of this Site, no information
        obtained by this site falls within the Child Online Privacy Act (COPA)
        and is not monitored as doing so.
      </p>
      <p dir="ltr">
        To access this Site or some of the products and resources it has to
        offer, you may be asked to provide certain personal information or other
        details for registration or order purposes. It is a condition of your
        use of this site that all the information you provide to be true,
        accurate, current and complete. If you provide any untrue or inaccurate
        information, or if we have reasonable grounds to suspect that such
        information is untrue or inaccurate, we may suspend or terminate your
        account and refuse all current and future use by you of our Site.&nbsp;
      </p>
      <p dir="ltr">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</p>
      <p dir="ltr">
        Occasionally there may be information on our site or in the Service that
        contains typographical errors, inaccuracies or omissions that may relate
        to product descriptions, pricing, promotions, offers, product shipping
        charges, transit times and availability. We reserve the right to correct
        any errors, inaccuracies or omissions, and to change or update
        information or cancel orders if any information in the Service or on any
        related website is inaccurate at any time without prior notice
        (including after you have submitted your order).
      </p>
      <p dir="ltr">
        We undertake no obligation to update, amend or clarify information in
        the Service or on any related website, including without limitation,
        pricing information, except as required by law. No specified update or
        refresh date applied in the Service or on any related website, should be
        taken to indicate that all information in the Service or on any related
        website has been modified or updated.
      </p>
      <p dir="ltr">SECTION 12 - PROHIBITED USES</p>
      <p dir="ltr">
        In addition to other prohibitions as set forth in the Terms of Service,
        you are prohibited from using the site or its content: (a) for any
        unlawful purpose; (b) to solicit others to perform or participate in any
        unlawful acts; (c) to violate any international, federal, provincial or
        state regulations, rules, laws, or local ordinances; (d) to infringe
        upon or violate our intellectual property rights or the intellectual
        property rights of others; (e) to harass, abuse, insult, harm, defame,
        slander, disparage, intimidate, or discriminate based on gender, sexual
        orientation, religion, ethnicity, race, age, national origin, or
        disability; (f) to submit false or misleading information; (g) to upload
        or transmit viruses or any other type of malicious code that will or may
        be used in any way that will affect the functionality or operation of
        the Service or of any related website, other websites, or the Internet;
        (h) to collect or track the personal information of others; (i) to spam,
        phNoahfunk, pharm, pretext, spider, crawl, or scrape; (j) for any
        obscene or immoral purpose; or (k) to interfere with or circumvent the
        security features of the Service or any related website, other websites,
        or the Internet. We reserve the right to terminate your use of the
        Service or any related website for violating any of the prohibited uses.
      </p>
      <p dir="ltr">
        All products sold on this Site are intended for legal use and may not be
        used or discussed in a manner that is illegal.&nbsp;As the consumer, it
        is your responsibility to know your local, state and federal laws before
        making a purchase. Prior to purchasing any product on this Site, you
        agree to verify the legality of the product in the jurisdiction where
        you are requesting shipment.&nbsp;We shall not be responsible for any
        liability arising from the alleged illegality of products sold to you on
        this Site. Any governmental employee, agency, or agent must identify
        themselves upon their entering the Site, and when ordering any products
        from our Site.
      </p>
      <p dir="ltr">
        SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
      </p>
      <p dir="ltr">
        We do not guarantee, represent or warrant that your use of our service
        will be uninterrupted, timely, secure or error-free.
      </p>
      <p dir="ltr">
        We do not warrant that the results that may be obtained from the use of
        the service will be accurate or reliable.
      </p>
      <p dir="ltr">
        You agree that from time to time we may remove the service for
        indefinite periods of time or cancel the service at any time, without
        notice to you.
      </p>
      <p dir="ltr">
        You expressly agree that your use of, or inability to use, the service
        is at your sole risk. The service and all products and services
        delivered to you through the service are (except as expressly stated by
        us) provided 'as is' and 'as available' for your use, without any
        representation, warranties or conditions of any kind, either express or
        implied, including all implied warranties or conditions of
        merchantability, merchantable quality, fitness for a particular purpose,
        durability, title, and non-infringement.
      </p>
      <p dir="ltr">
        In no case shall Noahfunk LLC, our directors, officers, employees,
        affiliates, agents, contractors, interns, suppliers, service providers
        or licensors be liable for any injury, loss, claim, or any direct,
        indirect, incidental, punitive, special, or consequential damages of any
        kind, including, without limitation lost profits, lost revenue, lost
        savings, loss of data, replacement costs, or any similar damages,
        whether based in contract, tort (including negligence), strict liability
        or otherwise, arising from your use of any of the service or any
        products procured using the service, or for any other claim related in
        any way to your use of the service or any product, including, but not
        limited to, any errors or omissions in any content, or any loss or
        damage of any kind incurred as a result of the use of the service or any
        content (or product) posted, transmitted, or otherwise made available
        via the service, even if advised of their possibility. Because some
        states or jurisdictions do not allow the exclusion or the limitation of
        liability for consequential or incidental damages, in such states or
        jurisdictions, our liability shall be limited to the maximum extent
        permitted by law.
      </p>
      <p dir="ltr">SECTION 14 - INDEMNIFICATION</p>
      <p dir="ltr">
        You agree to indemnify, defend and hold harmless Noahfunk LLC and our
        parent, subsidiaries, affiliates, partners, officers, directors, agents,
        contractors, licensors, service providers, subcontractors, suppliers,
        interns and employees, harmless from any claim or demand, including
        reasonable attorneys&rsquo; fees, made by any third-party due to or
        arising out of your breach of these Terms of Service or the documents
        they incorporate by reference, or your violation of any law or the
        rights of a third-party.
      </p>
      <p dir="ltr">SECTION 15 - SEVERABILITY</p>
      <p dir="ltr">
        In the event that any provision of these Terms of Service is determined
        to be unlawful, void or unenforceable, such provision shall nonetheless
        be enforceable to the fullest extent permitted by applicable law, and
        the unenforceable portion shall be deemed to be severed from these Terms
        of Service, such determination shall not affect the validity and
        enforceability of any other remaining provisions.
      </p>
      <p dir="ltr">SECTION 16 - TERMINATION</p>
      <p dir="ltr">
        The obligations and liabilities of the parties incurred prior to the
        termination date shall survive the termination of this agreement for all
        purposes.
      </p>
      <p dir="ltr">
        These Terms of Service are effective unless and until terminated by
        either you or us. You may terminate these Terms of Service at any time
        by notifying us that you no longer want Noahfunk to use our Services, or
        when you cease using our site.
      </p>
      <p dir="ltr">
        If in our sole judgment you fail, or we suspect that you have failed, to
        comply with any term or provision of these Terms of Service, we also may
        terminate this agreement at any time without notice and you will remain
        liable for all amounts due up to and including the date of termination;
        and/or accordingly may deny you access to our Services (or any part
        thereof).
      </p>
      <p dir="ltr">SECTION 17 - ENTIRE AGREEMENT</p>
      <p dir="ltr">
        The failure of us to exercise or enforce any right or provision of these
        Terms of Service shall not constitute a waiver of such right or
        provision.
      </p>
      <p dir="ltr">
        These Terms of Service and any policies or operating rules posted by us
        on this site or in respect to The Service constitutes the entire
        agreement and understanding between you and us and govern your use of
        the Service, superseding any prior or contemporaneous agreements,
        communications and proposals, whether oral or written, between you and
        us (including, but not limited to, any prior versions of the Terms of
        Service).
      </p>
      <p dir="ltr">
        Any ambiguities in the interpretation of these Terms of Service shall
        not be construed against the drafting party.
      </p>
      <p dir="ltr">SECTION 18 - GOVERNING LAW</p>
      <p dir="ltr">
        These Terms of Service and any separate agreements whereby we provide
        you Services shall be governed by and construed in accordance with the
        laws of Georgia.
      </p>
      <p dir="ltr">SECTION 19 - CHANGES TO TERMS OF SERVICE</p>
      <p dir="ltr">
        You can review the most current version of the Terms of Service at any
        time at this page.
      </p>
      <p dir="ltr">
        We reserve the right, at our sole discretion, to update, change or
        replace any part of these Terms of Service by posting updates and
        changes to our website. It is your responsibility to check our website
        periodically for changes. Your continued use of or access to our website
        or the Service following the posting of any changes to these Terms of
        Service constitutes acceptance of those changes.
      </p>
      <p dir="ltr">SECTION 20 - CONTACT INFORMATION</p>
      <p dir="ltr">
        Questions about the Terms of Service should be sent to us at
        hi@saintandcenter.com
      </p>
    </Wrapper>
  </Layout>
)

export default Terms
