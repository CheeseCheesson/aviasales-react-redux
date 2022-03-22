import React from 'react'

import Utils from '../../utils'

import titleStyle from './title.module.css'

const Title = ({ ticket }) => {
  return (
    <div className={titleStyle.title}>
      <div className={titleStyle.cardPrice}>{Utils.priceEditor(ticket['price'])}</div>
      <img src={`//pics.avs.io/99/36/${ticket['carrier']}.png`} alt="cardImg" className="logo air company" />
    </div>
  )
}

export default Title
