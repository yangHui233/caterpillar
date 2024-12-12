import React from 'react'
import Index from '@/Pages/Index'
function loadable(loader) {
  return React.lazy(loader)
}

const routers = [
  {
    path: '/index',
    //此处如果首页作为大部分情况的入口，就不采用懒加载，如果此项目有很多入口，又没有必要采取多入口模式，则此处用懒加载
    //component:loadable(() => import ('@/Pages/Index'))
    component: Index,
  },
  {
    path: '/pagea',
    component: loadable(() => import('@/Pages/PageA')),
  },
  {
    path: '/pageb',
    component: loadable(() => import('@/Pages/PageB')),
  },
]
export default routers
