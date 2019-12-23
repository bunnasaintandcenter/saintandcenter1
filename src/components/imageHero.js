import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import Img from "gatsby-image"
import arrow from "../images/down.svg"

const Wrapper = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background: ${props => props.theme.color.gold};

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
  }
`

const Text = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptop} {
    top: 0;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "left . right";
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 30px;
    font-weight: 200;
    margin: 0;
    text-align: center;

    @media ${device.laptop} {
      &:first-of-type {
        grid-area: left;
        text-align: right;
      }

      &:nth-of-type(2) {
        grid-area: right;
        text-align: left;
      }
    }

    @media ${device.laptop} {
      font-size: calc(28px + ((100vw - 600px) * 0.03));
    }
  }
`

const Arrow = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  background: url(${arrow});
  background-size: 100%;
  width: 24px;
  height: 33px;
  cursor: pointer;
  z-index: 3;
`

// const useScrollHandler = handler => {
//   useEffect(() => {
//     window.addEventListener("scroll", handler)
//     return () => {
//       window.removeEventListener("scroll", handler)
//     }
//   }, [])
// }

// const Curtain = props => {
//   const ref = useRef()
//   const handler = () => {
//     if (window.scrollY < window.innerHeight) {
//       ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY}px)`
//     } else {
//       ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
//     }
//   }
//   useScrollHandler(handler)
//   return <div ref={ref} {...props} />
// }

const ImageHero = ({ handlePageScroll, img }) => {
  return (
    <Wrapper>
      <Img
        placeholderClassName="loading"
        loading="eager"
        fluid={img.childImageSharp.fluid}
      />
      <Text>
        <h2>your higher self</h2>
        <h2>without the high</h2>
      </Text>
      <Arrow onClick={() => handlePageScroll("intro")} />
    </Wrapper>
  )
}

export default ImageHero
