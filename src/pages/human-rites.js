import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import TextTransition, { presets } from "react-text-transition"
import { Waypoint } from 'react-waypoint'
import SEO from '../components/seo'
import { isMobile } from 'react-device-detect'
import { device } from '../utils/devices'

const Wrapper = styled.div`

  p {
    width: 90vw;
    margin: 2rem auto;
    font-weight: 200;
    font-size: 18px;
    line-height: 1.4em;

    @media ${device.laptop}{
      width: auto;
    }
  }

  blockquote {
    height: 50vh;
    background: ${props => props.theme.color.darkBlue};
    color: ${props => props.theme.color.blue};
    padding: 0 5vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
    box-sizing: border-box;
  }

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
`;

const Block = styled.div`
  height: calc(100vh - 4vw - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  font-size: 30px;
  line-height: 1.4em;
  box-sizing: border-box;
  font-weight: 200;
`;

const Heading = styled.div`
  position: sticky;
  top: calc(4vw  + 2rem);
  height: calc(100vh - 4vw - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  padding: 0 4rem;
  line-height: 1.4em;
  box-sizing: border-box;
  text-transform: uppercase;
  background: ${props => props.theme.color.darkBlue};
  color: ${props => props.theme.color.blue};
`;

const content = [
  {
    heading: 'From your higher self to our higher selves',
    paragraph: 'As science continues to prove the therapeutic benefits of the cannabis plant, the demand for products like  cannabis-derived CBD continues to increase and the industry is booming/flourishing. '
  },
  {
    heading: 'We believe in cannabis equality for all',
    paragraph: 'And yet, there are still thousands of people restricted from jobs, access to housing and even freedom for the same plants used to make cannabis wellness products. The majority of cannabis and CBD companies have chosen to remain silent.'
  },
  {
    heading: 'Because plant-based wellness is a rite and a right',
    paragraph: 'We recognize the proven health and environmental benefits of the cannabis plant. We understand that the stigma of cannabis, which originated in the 1970’s with Richard Nixon’s declaration of the “War on Drugs”, an initiative that was rooted in misinformation, fear and racism. '
  },
  {
    heading: 'And if plant-based wellness is not for all of us, then it’s none of us',
    paragraph: 'For every product sold, we’re donating a percentage to  Reform Georgia to defeat mass incarceration, expunge records and restore hope to people and communities in the southern United States unfairly harmed by inequitable laws and policies.'
  },
  {
    heading: 'It’s CBD with a higher calling -  personal transformation and collective elevation. ',
    paragraph: 'Our mission is to eliminate the suffering caused by nonviolent cannabis offenses. Through advocacy and activism, we’re leading the way in creating socially impactful and equitable cannabis companies and products. Because feeling good, means doing better.'
  }
]

const HumanRites = ({ location }) => {

  const [slide, setSlide] = useState(0)

  return (
    <Layout location={location}>
      <SEO title='Human Rites | Saint and Center' />
      {isMobile
        ?
          <Wrapper>
            {content.map(({paragraph, heading}) => (
              <div key={heading}>
                <blockquote>
                  {heading}
                </blockquote>
                <p>{paragraph}</p>
              </div>
            ))}
          </Wrapper>
        :
          <Wrapper>
            <div>
            {content.map(({paragraph}, index) => (
              <Block key={paragraph}>
                {paragraph}
                <Waypoint onEnter={() => setSlide(index)} />
              </Block>
            ))}
            </div>
            <Heading>
            {presets &&
              <TextTransition
                text={content[slide].heading}
                springConfig={presets.default}
              />
            }
            </Heading>
          </Wrapper>
      }
    </Layout>
  )
}

export default HumanRites;
