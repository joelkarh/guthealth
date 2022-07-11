import React from 'react'
import Header from './Header'
import Menu from './menu'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>
      {children}  
    </main>
    {/* Footer */}
    </>
  )
}

export default Layout