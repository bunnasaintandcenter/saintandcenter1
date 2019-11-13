import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  position: relative;
  background: ${props => props.bg ? props.bg : `transparent`};

  span {
    &:first-of-type {
      position: absolute;
      top: 2rem;
      left: 5vw;
      z-index: 1;
      font-size: 36px;
      font-weight: 300;
    }
  }

  .slick-track {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slick-prev {
    left: 2.5vw;
    background: url(${arrow});
    transform: rotate(180deg);
    transform-origin: top left;
    background-size: 100%;
    height: 30px;
    margin-top: 15px;
    z-index: 4;

    &:hover {
      background: url(${arrow});
      background-size: 100%;
    }

    &:before {
      content: none;
    }
  }

  .slick-next {
    right: 2.5vw;
    background: url(${arrow});
    background-size: 100%;
    height: 30px;

    &:hover {
      background: url(${arrow});
      background-size: 100%;
    }

    &:before {
      content: none;
    }
  }

  img {
    width: ${props => props.cover ? `100vw` : `auto`};
    height: 70vh;
    object-fit: contain;
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

    li {
      width: auto;
      height: auto;

      &.slick-active {
        button {
          background: rgb(51,51,51);
        }
      }

      button {
        border: 2px solid rgb(51,51,51);
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
`;

const Carousel = ({ children, cover, arrows, bg, title }) => (
  <Wrapper data-testid='carousel' bg={bg} cover={cover}>
    {title &&
      <span>Let there be you.</span>
    }
    <Slider
      dots
      fade
      speed={500}
      infinite
      arrows={arrows}
    >
      {children}
    </Slider>
  </Wrapper>
);

Carousel.propTypes = {
  children: PropTypes.any.isRequired,
  cover: PropTypes.bool,
  arrows: PropTypes.bool,
  bg: PropTypes.string,
  title: PropTypes.string
}

export default Carousel;
