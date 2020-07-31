import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'
import { AuthContext } from '../../context/auth-context'
import Button from '../FormElements/Button'

const NavLinks = () => {
  const { authorized, signOut } = useContext(AuthContext)
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {authorized && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {authorized && (
        <li>
          <NavLink to="/places/new">Add Place</NavLink>
        </li>
      )}
      {authorized ? (
        <li>
          <Button onClick={signOut}>Log Out</Button>
        </li>
      ) : (
        <li>
          <NavLink to="/auth">Register / SignIn</NavLink>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
