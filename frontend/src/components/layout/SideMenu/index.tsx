// React
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Third party
import { map } from 'lodash'
import { FiLogOut } from 'react-icons/fi'

// Project
import { routes, sizeIcon } from '../../../routes'
import { Avatar } from '../Avatar'

export function SideMenu() {
  // Hooks
  const location = useLocation()

  return (
    <div className='content_main_side'>
      <div className='content_avatar'>
        <Avatar
          image='https://images.unsplash.com/photo-1601628195635-0c0a8755f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYWd1ZSUyMG9mJTIwbGVnZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          username='Matheus Garcia'
        />
      </div>
      <ul className='content_item_nav'>
        {map(routes, (route, index) => {
          if (!route.menu)
            return

          let path = location.pathname.split('/')
          let active = false
          active = route.exact && location.pathname === route.path ||
            !route.exact && path[1] === route.path.split('/')[1]

          return (
            <li className={`item ${active && 'active'}`} key={index}>
              <Link to={route.path}>
                {route.icon && (
                  <span>{route.icon}</span>
                )}
                <p>{route.name}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='content_logout'>
        <FiLogOut size={sizeIcon} />
        <span>Sair</span>
      </div>
    </div>
  )
}