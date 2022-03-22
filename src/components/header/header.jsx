import React from 'react'

import logo from '../../assets/image/Logo.png'

import headerStyle from './header.module.css'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <img src={logo} alt="logo" className="logo" />
    </header>
  )
}

export default Header
