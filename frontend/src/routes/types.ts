// React
import React, { ReactNode } from 'react'

interface IComponent {
  routes: IRoute[] | undefined
}

export interface IRoute {
  component: React.FC<IComponent>
  exact: boolean
  menu?: boolean
  path: string
  icon?: ReactNode
  name?: string
  routes?: IRoute[]
}