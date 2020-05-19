import React from 'react'
import styled from 'styled-components'
import {
  containerGutter,
  containerGutterMobile,
  containerWidth,
  containerWidthMobile
} from '@styles/sizings'
import breakpoint from '@styles/breakpoint'

const Container = styled.div`
  width: 100%;
  max-width: ${containerWidth};
  padding: 0 ${containerGutter};
  margin: 0 auto;
  h2 + * {
    margin-top: 10px;
  }
  ${breakpoint('xs')`
    max-width: ${containerWidthMobile};
    padding: 0 ${containerGutterMobile};
  `}
`

export default ({ children }) => (
  <Container className="container">
    {children}
  </Container>
)