import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from '@/Router/history'
import routers from './routers'
import Footer from '@/Components/Footer'

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
                    <Redirect path="/" to="/home"></Redirect>
                    <Route component={NoMatch} />
                  </Switch>
                  <Footer history={history} />
                </React.Suspense>
              </div>
            )
          }}></Route>
      </Router>
    )
  }
}
