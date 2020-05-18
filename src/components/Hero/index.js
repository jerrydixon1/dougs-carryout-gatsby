import React from 'react'
import { HeroContainer, HeroTitle, HeroSubtitle } from './style'

export default ({ title, subtitle, image }) => (
  <HeroContainer backgroundImage={image}>
    <HeroTitle>{title}</HeroTitle>
    <HeroSubtitle>{subtitle}</HeroSubtitle>
  </HeroContainer>
)