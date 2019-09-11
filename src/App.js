import React from "react";
import { Route, Switch } from "react-router-dom";
import Screen from "./Screen";
import User from "./User";
import Backend from "./backend";
import { Layout } from "antd";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Switch>
      <Route exact path="/user" component={User} />
      <Route path="/" component={Screen} />
      <Route path="/backend" component={Backend} />
      {/* when none of the above match, <NoMatch> will be rendered */}
      {/* <Route component={NoMatch} /> */}
    </Switch>

    // <div className="App" >
    //   <a className="App-body">

    //   </a>
    // </div>
  );
}

export default App;
