import React from 'react'
import styled, { css } from 'styled-components'
import breakpoint from '@styles/breakpoint'
import { lightColor } from '@styles/colors'

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundImage}) no-repeat 0 0;
  background-size: cover;
  position: relative;
  ${breakpoint('xs')`
    display: flex;
    align-items: center;
  `}
`

const TextContainer = styled.div`
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
`

export const HeroContainer = ({ backgroundImage, children }) => (
  <Wrapper backgroundImage={backgroundImage}>
    <TextContainer>
      {children}
    </TextContainer>
  </Wrapper>
)

const textColor = css`
  color: ${lightColor};
  text-shadow: 3px 6px 6px #00000029;
`
export const HeroTitle = styled.h1`
  ${textColor}
`

export const HeroSubtitle = styled.p`
  ${textColor}
  font-size: 28px;
  line-height: 34px;
  max-width: 585px;
  margin-left: auto;
  margin-top: 5px;
  ${breakpoint('xs')`
    font-size: 24px;
    line-height: 28px;
  `}
`