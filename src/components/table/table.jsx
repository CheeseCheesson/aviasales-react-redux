import React from 'react'

import Utils from '../../utils'

import './table.module.css'

const Table = ({ segment }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>
            {segment.origin}–{segment.destination}
          </td>
          <td>В пути</td>
          <td>{Utils.changeStopsDeclension(segment['stops'])}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Utils.timeToTrip(segment.date, segment.duration)}</td>
          <td>{Utils.duration(segment.duration)}</td>
          <td>{segment['stops'].join(', ')}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
