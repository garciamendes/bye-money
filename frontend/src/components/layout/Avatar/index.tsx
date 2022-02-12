// React
import React from 'react'

// Local
import { IAvatar } from './types'

export function Avatar({ image, username }: IAvatar) {
  return (
    <div className='content_avatar'>
      <img src={image} />
      <span>{username}</span>
    </div>
  )
}