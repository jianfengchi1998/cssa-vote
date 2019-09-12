import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EventListener from './containers/EventListener'
import routes from './routes'
import './App.css'

function App() {
  return (
    <>
      <EventListener />
      <Switch>
        {
          routes.map((route, i) => (
            <Route key={i} {...route} />
          ))
        }
      </Switch>
    </>
  )
}

export default App
