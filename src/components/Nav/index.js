import React from 'react'
import { 
  NavContainer, 
  NavLogo, 
  NavLinkContainer, 
  NavLink, 
  NavBottomGraphic 
} from './style'

export default () => (
  <NavContainer>
    <NavLogo />
    <NavLinkContainer>
      <NavLink href="#about">About Us</NavLink>
      <NavLink href="#hours-location">Hours &amp; Location</NavLink>
      <NavLink href="#food-menu">Our Menu</NavLink>
      <NavLink href="#contact">Contact Us</NavLink>
    </NavLinkContainer>
    <NavBottomGraphic />
  </NavContainer>
)