// React
import React from 'react'

// Project
import { Loader } from '../../components/Loader'

// Local
import './profile.scss'

export function Profile() {
  return (
    <div className='container_main_profile'>
      <Loader />
      <span>Construíndo...</span>
    </div>
  )
}