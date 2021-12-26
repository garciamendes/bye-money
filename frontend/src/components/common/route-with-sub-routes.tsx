// React
import { Route } from 'react-router-dom'

// Project
import { IRoute } from '../../routes/types'

export function RouteWithSubRoutes(route: IRoute) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={
        props => <route.component {...props} routes={route.routes} />
      }
    />
  )
}