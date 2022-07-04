import React from 'react'
import Menu from './menu'

function Header() {
  return (
    <>
    <div className="container-fluid">
        <div className="menu">
            <span className="brand-name">
                Gut health coach
            </span>
            <Menu/>
        </div>
        
    </div>
        
    </>
  )
}

export default Header