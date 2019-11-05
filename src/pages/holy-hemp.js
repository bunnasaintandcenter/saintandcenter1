import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import TextTransition, { presets } from "react-text-transition"
import { Waypoint } from 'react-waypoint'
import SEO from '../components/seo'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  background: ${props => props.theme.color.forest};
  color: ${props => props.theme.color.green};
`;

// const Progress = styled.progress`
//   top: calc(4vw + 1.25rem);
//   width: 100vw;
//   height: 6px;
//   position: fixed;
//   transition: 0.1s all ease-in-out;
//   z-index: 10;
//   background: transparent;
//   appearance: none;
//
//   &[value]: {
//     background: red;
//   }
// `;

const content = [
  {
    heading: 'Holy Hemp',
    paragraph: 'As one of the earliest cultivated plants in human history, hemp has been used for the health happiness and sustainability of people and the planet for millenia. Now that the stigma is waning, science is finally able to reveal the good news; hemp can heal our bodies, minds and planet.'
  },
  {
    heading: 'In the beginning there was hemp',
    paragraph: 'For nearly 10,000 years, hemp has been used for food, textiles, biofuel and as a natural medicinal therapy. First cultivated in Asia, from George Washington to World War 2, it is a plant that has been used to sustain people through the millenia.'
  },
  {
    heading: 'A divine vine with high potential',
    paragraph: 'A distinct strain of the cannabis plant, hemp is rich in antioxidants and 116 naturally occurring compounds called cannabinoids. And CBD, aka cannabidiol, is a cannabinoid known for its powerful therapeutic effects.'
  },
  {
    heading: 'That works with our body',
    paragraph: 'CBD binds with the receptors in our body’s endocannabinoid system - the network responsible for regulating pain, stress, mood, inflammation, sleep and memory. Taking CBD helps to balance our system, helping us to feel cool, calm, centered and in control of our everyday obstacles, responsibilities and experiences. '
  },
  {
    heading: 'And our planet',
    paragraph: 'As one of the most sustainable crops on earth, hemp is leading the way in environmental impact. It grows easily without pesticides, removes carbon dioxide from the atmosphere and returns essential nutrients back to the soil. And because virtually every part of the plant can be used to make everything from paper to construction materials, it has the power to replace destructive materials like plastics, cotton, soy and fossil fuels.'
  },
  {
    heading: 'But unlike THC, it won’t make you high.',
    paragraph: 'Though they both are born from the cannabis plant, unlike marijuana, hemp contains little to no THC - the compound responsible for the intoxicating and mind-altering effects of marijuana. '
  },
  {
    heading: 'But it will take you higher',
    paragraph: 'Hemp-derived CBD works with your body to produce a natural high - lifting your mood, reducing stress, relieving your pain and deepening sleep to give you that pure and inspired feeling you get when you’re reaching toward your potential.',
  },
  {
    heading: 'We’ve created clean, natural hemp products that believe in you.',
    paragraph: (
      <>
        <p>Take CBD in the morning to feel calm, uplifted, focused.</p>
        <p>Or In the evening to relax and wake up rested.</p>
        <p>Or rub it in wherever your body needs relief.</p>
        <p>Hemp-derived CBD frees us from mental and physical blocks to feel better, focus, take action, balance and become.</p>
      </>
    )
  }
]

const HolyHemp = ({location}) => {

  const [slide, setSlide] = useState(0)

  return (
    <Layout location={location}>
      <SEO title='Holy Hemp | Saint and Center' />
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
    </Layout>
  )
}

export default HolyHemp;
