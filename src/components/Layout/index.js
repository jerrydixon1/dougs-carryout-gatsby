import React from 'react'
import SiteHead from '@components/SiteHead'
import Nav from '@components/Nav'
import 'reset-css'
import { LayoutWrap } from './style'

export default ({ children }) => (
  <LayoutWrap>
    <SiteHead />
    <Nav />
    <main>{children}</main>
    {/* TODO add Footer component */}
  </LayoutWrap>
)

