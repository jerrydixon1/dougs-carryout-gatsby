import React from 'react'
import styled from 'styled-components'
import breakpoint from '@styles/breakpoint'
import { navWidth, fontSemibold } from '@styles/sizings'
import { transitionNormal } from '@styles/transitions'
import { accentColor, lightColor } from '@styles/colors'
import logoSrc from '@img/logo.svg'
import logoGraphicSrc from '@img/logo-graphic.svg'

export const NavContainer = styled.nav`
  width: ${navWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: ${accentColor};
  padding: 60px 0;
  overflow: scroll;
  transition: ${transitionNormal};
  /* TODO add breakpoints */
`

const NavLogoContainer = styled.div`
  width: 100%;  
  text-align: center;  
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 225px;
  }
`
export const NavLogo = () => (
  <NavLogoContainer>
    <img src={logoSrc} alt="Doug's Carryout Logo" /> 
  </NavLogoContainer>
)

export const NavLinkContainer = styled.ul`
  padding: 25px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    a {
      text-decoration: none;
      color: ${lightColor};
      letter-spacing: 1.28px;
      font-weight: ${fontSemibold};

      &:hover {
        cursor: pointer;
      }
    }
    + li {
      margin-top: 32px;
    }
  }
`

export const NavLink = ({ href, children }) => {
  const handleClick = e => {
    e.preventDefault()
    // TODO handle click properly by scrolling to section
    console.log('Clicked: ', href)
  }
  return (
    <li>
      <a href="#" onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}

const NavBottomGraphicContainer = styled.div`
  width: 100%;  
  text-align: center;  
  img {
    display: block;
    margin: 0 auto;
    height: 125px;
  }
`
export const NavBottomGraphic = () => (
  <NavBottomGraphicContainer>
    <img src={logoGraphicSrc} alt="Doug's Carryout Beardface Graphic" />
  </NavBottomGraphicContainer>
)