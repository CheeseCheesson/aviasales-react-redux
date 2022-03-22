/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  ticketsSetTransferValue,
  ticketsSetAllTransferValues,
  ticketsRemoveAllTransferValues,
} from '../../redux/tickets'

import sideFilterStyle from './side-filter.module.css'

const SideFilter = () => {
  const dispatch = useDispatch()
  const { transfers } = useSelector(state => state['tickets'])

  useEffect(() => {
    if (!transfers[0].checked) {
      if (transfers.slice(1).filter((elem) => !elem.checked).length === 0) {
        dispatch(ticketsSetTransferValue('Все'))
      }
    }
  }, [transfers, dispatch])

  const handleCheckFilter = (name) => {
    if (transfers[0].checked) {
      switch (name) {
        case 'Все':
          dispatch(ticketsRemoveAllTransferValues())
          return
        default:
          dispatch(ticketsSetTransferValue(name))
          dispatch(ticketsSetTransferValue('Все'))
      }
    } else {
      switch (name) {
        case 'Все':
          console.log('Все')
          dispatch(ticketsSetAllTransferValues())
          return
        default:
          dispatch(ticketsSetTransferValue(name))
      }
    }
  }
  return (
    <aside className={sideFilterStyle.selectFilter}>
      <div className={sideFilterStyle.selectFilter__body}>
        <div className={sideFilterStyle.selectFilter__title}>Количество пересадок</div>
        <form action='' className={sideFilterStyle.selectFilter__form}>
          {
            transfers.map(item => (
              <label key={item.name} className={sideFilterStyle.selectFilter__label} htmlFor={item.name}>
                <input
                  type='checkbox'
                  name={item.name}
                  id={item.name}
                  checked={item.checked}
                  onChange={() => handleCheckFilter(item.name)}
                />
                {item.name}
              </label>
            ))
          }
        </form>
      </div>
    </aside>
  )
}

export default SideFilter
