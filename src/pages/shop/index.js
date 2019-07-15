import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Header from '../../components/header'

const Wrapper = styled.div`

`;

const Home = ({ location, theme }) => (
  <Layout location={location}>
    <SEO title='Shop | Saint and Center' />
    <Wrapper>
      shop
    </Wrapper>
  </Layout>
);

export default Home;
