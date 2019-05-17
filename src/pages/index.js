import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Subscribe from '../components/Subscribe'
import logoType from '../images/logotype.svg'
import icon from '../images/logo.svg'
import Layout from '../components/layout'
import { device } from '../utils/devices'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  5%, 33.3% {
    transform: rotate(180deg);
  }

  38.33%, 66.6% {
    transform: rotate(360deg);
  }

  71.6%, 100% {
    transform: rotate(540deg)
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: ${props => props.bg};
  padding: 1rem;
  display: flex;
  transition: 0.5s all ease-in-out;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: 'US', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  @media ${device.laptop}{
    padding: 2rem;
    letter-spacing: 0.1rem;
    font-size: 16px;
  }
`;

const Header = styled.header`
  img {
    width: 20vw;
    min-width: 200px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 10vw;
  margin: -10vw 0 0 -5vw;
  animation: ${spin} 12s infinite ease;
  animation-delay: 4s;
  will-change: transform;
  transform-origin: center;

  @media ${device.laptop}{
    top: 50%;
    margin: -5vw 0 0 -2.5vw;
    width: 5vw;
  }

  img {
    width: 100%;
    margin: 0;
  }
`;

const Left = styled.div`
  position: absolute;
  left: 2rem;
  top: 0;
  height: 50vh;
  display: flex;
  align-items: center;

  @media ${device.laptop}{
    height: 100vh;
  }

  span {
    letter-spacing: 0.05rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);

    @media ${device.laptop}{
      letter-spacing: 0.1rem;
    }
  }
`;

const Right = styled.div`
  position: absolute;
  right: 2rem;
  top: 0;
  height: 50vh;
  display: flex;
  align-items: center;

  @media ${device.laptop}{
    height: 100vh;
  }

  span {
    writing-mode: vertical-lr;
    letter-spacing: 0.1rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 18px;
    text-align: center;

    @media ${device.laptop}{
      font-size: 36px;
    }
  }
`;

const Phrase = styled.div`
`;

class Home extends Component {

  state = {
    email: '',
    currentColor: 0,
    currentPhrase: 0
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ email: value })
  }

  componentDidMount(){
    console.log('mounted!')
    setInterval(() => {
      const { currentColor, currentPhrase } = this.state;
      if(currentColor < 3){
        this.setState({
            currentColor: currentColor + 1,
            currentPhrase: currentPhrase + 1
        })
      } else {
        this.setState({ currentColor: 0, currentPhrase: 0 })
      }
    }, 4000)
  }

  render() {

    const colors = [
      'rgb(239,181,8)',
      'rgb(14,56,33)',
      'rgb(139,41,4)',
      'rgb(42,34,90)'
    ]

    const phrases = [
      'support cannabis restorative justice',
      'learn about hemp and sustainability',
      'stock Saint and Center CBD for my business',
      'be notified of Saint and Center launch'
    ]

    const { currentColor, currentPhrase } = this.state;

    return (
      <Layout>
        <Wrapper bg={colors[currentColor]}>
          <Header><img src={logoType} alt='Saint and Center LogoType' /></Header>
          <Left><span>Coming Soon</span></Left>
          <Right><span>Summer 2018</span></Right>
          <Icon><img src={icon} alt='Saint and Center Logo' /></Icon>
          <Footer>
            <Subscribe
              email={this.state.email}
              handleChange={this.handleChange}
            />
              <Phrase><h2>I want to</h2> <h2>{phrases[currentPhrase]}</h2></Phrase>
          </Footer>
        </Wrapper>
      </Layout>
    );
  }

}

export default Home;
