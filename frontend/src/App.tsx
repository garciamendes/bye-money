// React
import React from 'react'
import { Redirect, Switch } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Project
import { LayoutMenu } from './components/layout'
import { RouteWithSubRoutes } from './components/common/route-with-sub-routes'

// Local
import { routes } from './routes'

export function App() {
  return (
    <>
      <LayoutMenu>
        <Switch>
          {map(routes, (route, index) => {
            return <RouteWithSubRoutes key={index} {...route} />
          })}
          <Redirect from='*' to='/404' />
        </Switch>
      </LayoutMenu>
    </>
  )
}
