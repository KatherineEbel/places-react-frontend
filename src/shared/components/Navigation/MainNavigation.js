import React, { Fragment, useState } from 'react'
import './MainNavigation.css'
import { Link } from 'react-router-dom'
import Backdrop from './Backdrop'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

const MainNavigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(o => !o)
  return (
    <Fragment>
      {drawerOpen && <Backdrop onClick={toggleDrawer} />}
      <SideDrawer show={drawerOpen} onClick={toggleDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  )
}

export default MainNavigation
