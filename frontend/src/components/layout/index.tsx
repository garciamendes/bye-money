// React
import React from 'react'

// Local
import './layout.scss'
import { SideMenu } from './SideMenu'
import { ILayoutProps } from './types'

export function LayoutMenu({ children }: ILayoutProps) {
  return (
    <div className='container_menu_main'>
      <SideMenu />
      <div className='content_right'>
        <div className='children'>
          {children}
        </div>
      </div>
    </div>
  )
}