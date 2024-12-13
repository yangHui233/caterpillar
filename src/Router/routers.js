import React from 'react'
import Index from '@/Pages/Home'
function loadable(loader) {
  return React.lazy(loader)
}

const routers = [
  {
    path: '/Home',
    //component:loadable(() => import ('@/Pages/Index'))
    component: Index,
  },
  {
    path: '/Boosters',
    component: loadable(() => import('@/Pages/Boosters')),
  },
  {
    path: '/Earn',
    component: loadable(() => import('@/Pages/Earn')),
  },
  {
    path: '/Invite',
    component: loadable(() => import('@/Pages/Invite')),
  },
]
export default routers
