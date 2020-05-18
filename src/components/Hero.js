import React from 'react'
import styled from 'styled-components'
import { lightColor } from '@styles/colors'
import breakpoint from '@styles/breakpoint'

const Hero = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${props => props.image}) no-repeat 0 0;
  background-size: cover;
  position: relative;
  ${breakpoint('xs')`
    display: flex;
    align-items: center;
  `}
  > div {
    position: absolute;
    width: 100%;
    padding: 0 50px;
    max-width: 877px;
    right: 0;
    bottom: 17.6%;
    text-align: right;
    ${breakpoint('xs')`
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      text-align: center;
      position: relative;
      margin-top: -50px;
    `}
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
      ${breakpoint('xs')`
        font-size: 24px;
        line-height: 28px;
      `}
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