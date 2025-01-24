import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from '@/Router/history'
import routers from './routers'
import Footer from '@/Components/Footer'
import storeUtil from '@/Utils/store'

const NoMatch = () => <div>router not found</div>
// const PUBLIC_URL = process.env.PUBLIC_URL

export default class App extends React.Component {
  // componentWillMount() {
  //   console.log('app will mount=====', storeUtil.getToken())
  //   if (!storeUtil.getToken() && history.location.pathname !== '/Home')
  //     history.replace('/Home')
  // }
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => {
            return (
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
                {/* <Footer history={history} /> */}
              </React.Suspense>
            )
          }}></Route>
      </Router>
    )
  }
}
