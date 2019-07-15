import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 4rem auto;
`;

const List = styled.ul`
  border-top: 2px solid black;
  list-style: none;
  font-size: 48px;
  font-weight: 300;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const Item = styled.li`
  border-bottom: 2px solid black;
  padding: 2rem 5vw;
  display: flex;
  align-items: baseline;
  transition: 0.2s all ease-in-out;

  &:first-of-type {
    color: ${props => props.theme.color.gold};
  }

  &:hover {
    padding-left: 4.5vw;
  }

  span {
    font-size: 30px;
    margin-left: 2rem;
  }

  &:after {
    content: ${props => props.after ? props.after : ''};
  }
`;

const ProductList = () => (
  <Wrapper>
    <List>
      <Item>Tincture <span>1000mg</span></Item>
      <Item>Tincture <span>500mg</span></Item>
      <Item>Balm</Item>
      <Item>Capsule</Item>
      <Item>Hoodies</Item>
      <Item>View All</Item>
    </List>
  </Wrapper>
);

export default ProductList;
