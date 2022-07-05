import Link from 'next/link'
import React from 'react'
import Menu from './menu'
import menustyle from '../styles/Home.module.scss'

function Header(props) {
  return (
    <>
    <div className="container-fluid">
        <div className={`${menustyle.menu}`}>
            <Link href='/' className="brand-name">
               {/*  eslint-disable-next-line @next/next/no-img-element */}
              <a className={menustyle.brand}><img className="img-fluid" src='/romyhugens-svg.svg' alt=""/></a>
            </Link>
            <div className={menustyle.menuBar}>
            <span className={menustyle.menuBarSlice}></span>
            <span className={menustyle.menuBarSlice}></span>
            <span className={menustyle.menuBarSlice}></span>
            </div>
            <Menu />
        </div>
        
    </div>
        
    </>
  )
}

export default Header