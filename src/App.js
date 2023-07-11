import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import HomeRoute from './components/HomeRoute'
import JobsRoute from './components/JobsRoute'
import JobRouteItemDetails from './components/JobRouteItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={HomeRoute} />
        <ProtectedRoute exact path="/jobs" component={JobsRoute} />
        <ProtectedRoute
          exact
          path="/jobs/:id"
          component={JobRouteItemDetails}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
