import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import routes from './routes'
import './App.css'

const {
  Header, Footer, Sider, Content,
} = Layout

function App() {
  return (
    <Switch>
      {
        routes.map((route, i) => (
          <Route key={i} {...route} />
        ))
      }
      {/* when none of the above match, <NoMatch> will be rendered */}
      {/* <Route component={NoMatch} /> */}
    </Switch>

  // <div className="App" >
  //   <a className="App-body">

  //   </a>
  // </div>
  )
}

export default App
