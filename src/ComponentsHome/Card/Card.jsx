import React from 'react'
import './Card.scss'
import Time from './img/62050 1 (1).png'

export default function Card() {
  return (
    <div>
        <div className='card'>
            <div className='cardImg'>
                <img src={Time} alt="" />
            </div>
            <h3>Louis XVI ATHOS</h3>
            <p>165 000 руб.  </p>
        </div>
    </div>
  )
}
