import Screen from './Screen'
import User from './User'
import Backend from './Backend'

export default [
  {
    exact: true,
    path: '/',
    component: User,
  }, {
    path: '/screen',
    component: Screen,
  }, {
    path: '/backend',
    component: Backend,
  },
]
