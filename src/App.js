import React from "react"
import { Route, Switch } from "wouter"

import Router from "componets/router"
import { HomePage, LoginPage } from "pages"

import "./App.css"

function App() {
  return (
    <>
      <Router base="/">
        <Switch>
          <Route path="login" component={LoginPage} />
          <Route path="home" component={HomePage} />
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
