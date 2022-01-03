// Third party
import { FiHome } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

// Project
import { Home } from '../container/home'
import { Profile } from '../container/Profile'
import { NotPageFound } from '../components/NotPageFound'

// Local
import { IRoute } from './types'

export const sizeIcon = 20

export const routes: Array<IRoute> = [
  {
    component: Home,
    path: '/',
    menu: true,
    exact: true,
    name: 'Home',
    icon: <FiHome size={sizeIcon} />
  },
  {
    component: Profile,
    path: '/profile',
    menu: true,
    exact: true,
    name: 'Pefil',
    icon: <AiOutlineUser size={sizeIcon} />
  },
  {
    component: NotPageFound,
    path: '/404',
    exact: true,
  }
]