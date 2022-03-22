import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'

import { fetchData, incrementTicketsItem } from '../../redux/tickets'
import SideFilter from '../side-filter/side-filter'
import Button from '../button/button'
import Title from '../title/title'
import Loader from '../loader/loader'
import Table from '../table/table'
import Utils from '../../utils'

import mainStyle from './main.module.css'

const Main = () => {
  const dispatch = useDispatch()
  const { isLoading, entity, transfers, activeSort, slices } = useSelector((state) => state['tickets'])

  useEffect(() => {
    if (entity.length === 0) dispatch(fetchData())
  }, [entity.length, dispatch])

  const ticketsToRender = Utils.sortFunctions(transfers, entity, activeSort)

  return (
    <main className={mainStyle.main}>
      <SideFilter />
      <article className={mainStyle.article}>
        <Button />
        {!isLoading ? (
          ticketsToRender.slice(0, slices).map((ticket) => (
            <div key={uuidv4()} className="article__card card">
              <div className={mainStyle.cardItem}>
                <Title ticket={ticket} />
                {ticket['segments'].map((seg) => (
                  <div key={uuidv4()} className="card table">
                    <Table segment={seg} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
        <div className="article__btn show-ticket">
          <a className={mainStyle.showTicket__btn} onClick={() => dispatch(incrementTicketsItem())}>
            Показать еще 5 билетов!
          </a>
        </div>
      </article>
    </main>
  )
}

export default Main
