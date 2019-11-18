import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { buildUrl } from "react-instafeed"
import Slider from "react-slick"
import { device } from "../utils/devices"
import axios from "axios"

const Instagram = styled.div`
  position: relative;

  @media ${device.laptop} {
    width: 50vw;
  }

  span {
    text-transform: uppercase;

    &:first-of-type {
      position: absolute;
      top: 3rem;
      left: 5vw;
      z-index: 1;
      font-size: 36px;
      font-weight: 300;
    }
  }

  img {
    width: ${props => (props.cover ? `100vw` : `auto`)};
    height: 70vh;
    object-fit: cover;
    margin: 0;
    display: flex;
    padding: 0;
  }

  .slick-dots {
    position: absolute;
    left: 0;
    bottom: 4rem;
    text-align: left;
    padding: 0 0 0 2rem;
    display: flex;

    img {
      height: 20vh;
      object-fit: cover;
    }

    li {
      width: auto;
      height: auto;

      &.slick-active {
        button {
          background: rgb(51, 51, 51);
        }
      }

      button {
        border: 2px solid rgb(51, 51, 51);
        border-radius: 50%;
        transition: 0.2s all ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        &:before {
          content: none;
        }
      }
    }
  }
`

const options = {
  accessToken: process.env.GATSBY_INSTAGRAM_KEY,
  clientId: process.env.GATSBY_INSTAGRAM_ID,
  get: "user",
  resolution: "standard_resolution",
  sortBy: "most-recent",
  userId: 10011102866,
}

const Insta = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(buildUrl(options))
      setImages(data.data)
    }

    fetchData()
  }, [])

  return (
    <Instagram data-testid="instafeed">
      <span>Hemp + High Vibes</span>
      {images.length > 0 && (
        <Slider dots>
          {images.map(({ caption, images }) => {
            const src = images[options.resolution].url
            return <img key={src} src={src} alt={caption.text} />
          })}
        </Slider>
      )}
    </Instagram>
  )
}

export default Insta
