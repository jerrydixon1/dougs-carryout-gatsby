import React from 'react'
import SiteHead from '../components/SiteHead'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import 'reset-css'
import '../styles/global.scss'
import styled from 'styled-components'
import breakpoint from '../styles/breakpoint'

const Layout = styled.div`
  position: relative;
  main {
    width: 100%;
    padding-left: $nav-width;
    color: $c-primary;
    transition: $transition-normal;
    @include breakpoint(md) {
      padding-left: 0;
    }
  }
  h1 {
    letter-spacing: 6px;
    font-size: 62px;
    line-height: 68px;
  }

  h2 {
    letter-spacing: 4.37px;
    font-size: 38px;
    line-height: 44px;
  }

  .body {
    font-size: 20px;
    line-height: 24px;
    font-weight: lighter;
  }

  .list-item {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.75px;
    font-weight: lighter;
  }

  .icon-text {
    font-size: 28px;
    line-height: 34px;
    font-size: 500;
    position: relative;
    padding-left: 32px;
    .icon {
      position: absolute;
      top: 0;
      left: 0;
      height: 34px;
    }
  }

  .container {
    padding-top: 50px;
    padding-bottom: 0;
    &:last-child {
      padding-bottom: 50px;
    }
  }

  ${breakpoint('xs')`
    h1 {
      font-size: 42px;
      line-height: 48px;
      letter-spacing: 5px;
    }
    
    h2 {
      letter-spacing: 3.25px;
      font-size: 32px;
      line-height: 38px;
    }

    .body {
      font-size: 18px;
      line-height: 22px;
    }
  `}
`

const TemplateWrapper = ({ children }) => {
  return (
    <Layout>
      <SiteHead />
      {/* TODO add SideNav component */}
      <div>{children}</div>
      {/* TODO add Footer component */}
    </Layout>
  )
}

export default TemplateWrapper
