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
]
export default routers
