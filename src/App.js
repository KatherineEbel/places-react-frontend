import React, { useCallback, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import './App.css'
import NewPlace from './places/pages/NewPlace'
import UpdatePlace from './places/pages/UpdatePlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import { AuthContext } from './shared/context/auth-context'
import Auth from './user/pages/Auth'
import Users from './user/pages/Users'

function App() {
  const [authorized, setAuthorized] = useState(false)
  const signIn = useCallback(() => setAuthorized(true), [])
  const signOut = useCallback(() => setAuthorized(false), [])

  return (
    <AuthContext.Provider value={{ authorized, signIn, signOut }}>
      <Router>
        <MainNavigation path="/" />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/auth" exact>
              {authorized ? <Redirect to="/" /> : <Auth />}
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              {authorized ? <NewPlace /> : <Auth />}
            </Route>
            <Route path="/places/:id">
              {authorized ? <UpdatePlace /> : <Auth />}
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
