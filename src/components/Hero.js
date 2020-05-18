import React from 'react'
import styled from 'styled-components'
import { lightColor } from '../styles/colors'

const Hero = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${props => props.image}) no-repeat 0 0;
  background-size: cover;
  position: relative;
  > div {
    position: absolute;
    width: 100%;
    padding: 0 50px;
    max-width: 877px;
    right: 0;
    bottom: 17.6%;
    text-align: right;
    h1, p {
      color: ${lightColor};
      text-shadow: 3px 6px 6px #00000029;
      margin: 0;
    }
    p {
      font-size: 28px;
      line-height: 34px;
      max-width: 585px;
      margin-left: auto;
      margin-top: 5px;
    }
  }
`

export default ({ title, subtitle, image }) => (
  <Hero image={image}>
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </Hero>
)