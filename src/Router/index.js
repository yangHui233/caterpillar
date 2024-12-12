import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from '@/Router/history'
import routers from './routers'
const NoMatch = () => <div>router not found</div>
export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => {
            return (
              <div>
                <React.Suspense fallback={<div></div>}>
                  <Switch>
                    {routers.map((route, i) => {
                      return (
                        <Route
                          key={i}
                          exact
                          location={location}
                          {...route}></Route>
                      )
                    })}
                    <Redirect path="/" to="/index"></Redirect>
                    <Route component={NoMatch} />
                  </Switch>
                </React.Suspense>
              </div>
            )
          }}></Route>
      </Router>
    )
  }
}
