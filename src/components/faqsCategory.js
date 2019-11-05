import React from "react"
import Expandable from './expandable'
import styled from 'styled-components'
import stripHtml from 'string-strip-html'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  .expandable {

    &:first-of-type {
      border-top: 2px solid rgb(51,51,51);
    }

    &:last-of-type {
      border-bottom: 0;
    }

    .expandable-title {
      padding: 1rem 2rem;
      font-size: 16px;

      @media ${device.laptop}{
        font-size: 24px;
        font-weight: 500;
        padding: 2rem 4rem;
      }
    }
  }
`;

const FAQsCategory = ({ data }) => (
  <Wrapper>
    {data.map(item => (
      <Expandable
        key={item.node.title}
        title={stripHtml(item.node.title)}
        padded
      >
        {stripHtml(item.node.content)}
      </Expandable>
    ))}
  </Wrapper>
)

export default FAQsCategory
