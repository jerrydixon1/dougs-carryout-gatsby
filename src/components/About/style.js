import styled from 'styled-components'
import breakpoint from '@styles/breakpoint'

export const AboutWrap = styled.div`
  display: flex;
`

export const AboutText = styled.div`
  max-width: 487px;
  margin-right: 50px;
  ${breakpoint('xs')`
    max-width: 100%;
    margin-right: 0;
  `}
`

export const AboutPic = styled.div`
  width: 253px;
  img {
    width: 100%;
  }
  ${breakpoint('xs')`
    display: none;
  `}
`