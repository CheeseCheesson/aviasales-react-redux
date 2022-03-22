import React from 'react'

import Header from '../header/header'
import Main from '../main/main'

import 'antd/dist/antd.min.css'
import appStyle from './app.module.css'

const App = () => {
  return (
    <div className={appStyle.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default App
