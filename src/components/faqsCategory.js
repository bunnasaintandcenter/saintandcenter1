import React from "react"
import Expandable from './expandable'
import styled from 'styled-components'
import stripHtml from 'string-strip-html'

const Wrapper = styled.div`
  .expandable {

    &:first-of-type {
      border-top: 2px solid rgb(51,51,51);
    }

    &:last-of-type {
      border-bottom: 0;
    }

    .expandable-title {
      padding: 2rem 4rem;
      font-weight: 500;
      font-size: 24px;
    }
  }
`;

const FAQsCategory = ({ data }) => (
  <Wrapper>
    {data.map(item => (
      <Expandable
        title={stripHtml(item.node.title)}
        padded
      >
        {stripHtml(item.node.content)}
      </Expandable>
    ))}
  </Wrapper>
)

export default FAQsCategory
