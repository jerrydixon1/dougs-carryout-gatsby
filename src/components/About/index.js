import React from 'react'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Container from '@components/Container'
import { AboutWrap, AboutText, AboutPic } from './style'

export default ({ title, description, image}) => (
  <Container>
    <AboutWrap>
      <AboutText>
        <h2>{title}</h2>
        <p class="body">{description}</p>
      </AboutText>
      <AboutPic>
        <PreviewCompatibleImage imageInfo={ { image, alt: 'About Section Image' } } />
      </AboutPic>
    </AboutWrap>
  </Container>
)