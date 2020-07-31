import React from 'react'
import ReactDOM from 'react-dom'
import './SideDrawer.css'
import { CSSTransition } from 'react-transition-group'

const SideDrawer = props => {
  const jsx = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={`slide-in-left`}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  )
  return ReactDOM.createPortal(jsx, document.getElementById(`drawer-hook`))
}

export default SideDrawer
