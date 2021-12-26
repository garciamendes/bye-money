// React
import React from 'react'
import { Link } from 'react-router-dom'

// Project
import NotPageFoundImg from '../../static/images/404.svg'

// Local
import './not-found.scss'

export function NotPageFound() {

  return (
    <div className='container_main_ not_found'>
      <img src={NotPageFoundImg} alt="Not found" />
      <Link to='/'>Home</Link>
    </div>
  )
}