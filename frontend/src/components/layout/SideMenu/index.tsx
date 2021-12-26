// React
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Project
import { routes } from '../../../routes'

export function SideMenu() {
  // Hooks
  const location = useLocation()

  return (
    <div className='content_main_side'>
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
        <span>Logout</span>
      </div>
    </div>
  )
}