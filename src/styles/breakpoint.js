import { css } from 'styled-components'

const sizes = {
  xs: '767px',
  sm: '991px',
  md: '1139px',
  lg: '1140px'
}

export default size => {
  let limit = size === 'lg' ? 'min-width' : 'max-width'
  size = sizes[size] || size

  return (...args) => {
    return css`
      @media(${`${limit}: ${size}`}) {
        ${css(args)}
      }
    `
  }
}