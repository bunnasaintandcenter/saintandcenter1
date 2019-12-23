import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 56px;
`
const Image = styled.div`
  position: sticky;
  top: calc(1.5vw + 3rem);
  height: calc(100vh - 1.5vw - 3rem);

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Text = styled.div`
  div {
    box-sizing: border-box;
    font-weight: 300;
    font-size: 30px;
    line-height: 48px;
    padding: 1rem;
    height: calc(100vh - 1.5vw - 3rem);
  }
`

const HumanRites = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HumanRitesQuery {
      file(relativePath: { eq: "human-rites-logo.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  const content = [
    {
      text: (
        <>
          <p>
            Every 48 seconds someone is arrested for a cannabis offense. There
            are more arrests for cannabis offenses each year than for all
            violent crimes combined. Almost 77 million people in the US (out of
            327 million total) have a criminal record. And a large percentage of
            those records are for minor offenses and non harmful victimless
            “crimes”.
          </p>
          <p>
            These records for minor offenses can seriously impede millions of
            Americans’ ability to live, restricting basic necessities like
            access to jobs, housing, education, and the right to vote. Too many
            Americans have seen their lives destroyed because they have criminal
            records as a result of marijuana use. Each year millions of
            Americans suffer the devastating effects of the failed war on drugs.
            It’s time for common sense drug policy reform.
          </p>
        </>
      ),
    },
    {
      text: (
        <>
          <p>
            How can the US help fund things like healthcare for all and tuition
            free higher education? The answer is legalizing cannabis and ending
            the war on drugs. Cannabis legalization in the US would save roughly
            $7.7 billion per year in averted enforcement costs and would yield
            an additional $6 billion in tax revenue.
          </p>
          <p>
            If we reinvested profits from legalization back into our communities
            rather than spending billions on prisons and policing, we could
            manifest things like affordable healthcare, livable wages,
            affordable housing and childcare, quality public institutional care
            and work environments, access to clinics, parks, recreational
            centers, public transportation.
          </p>
          <p>
            Despite widespread legalization, tens of thousands of individuals
            remain incarcerated in the US for victimless cannabis offenses,
            while countless others languish in prisons worldwide.
          </p>
        </>
      ),
    },
    {
      text: (
        <>
          <p>
            Saint and Center is dedicated to bringing restorative justice to the
            cannabis industry through clemency, expungement, and reentry work.
          </p>
          <p>
            With every product sold, a percentage goes to support REFORM
            GEORGIA, our nonprofit partner helping to reduce and heal the harm
            caused by nonviolent drug offenses in the southeastern US. Each sale
            helps to restore people’s access to work, housing, and to help
            change inequitable laws that deny one’s freedom. With REFORM
            GEORGIA, we’re building a diverse team that believes in social
            wellness, while welcoming those who’ve been convicted of nonviolent
            marijuana offense to work with us.
          </p>
          <p>
            It’s CBD with a higher calling for personal transformation and
            collective elevation.
          </p>
        </>
      ),
    },
  ]

  console.log(data)

  return (
    <Layout location={location}>
      <Wrapper>
        <Image>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Image>
        <Text>
          {content.map((p, index) => (
            <div key={index}>
              <p>{p.text}</p>
            </div>
          ))}
        </Text>
      </Wrapper>
    </Layout>
  )
}
export default HumanRites
