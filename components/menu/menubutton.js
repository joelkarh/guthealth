import React, { useState } from 'react'
import menustyle from '../../styles/Home.module.scss'
import Line from './menuline'

// ${menustyle.menubarSliceGone}
 

const MenuButton = (props) => {
  const{menu,setMenu} = props
  const openMenu = () =>{
    //menu=positive
   setMenu(!menu)
}

  return (
    <>
    <button onClick={openMenu} className={menustyle.menuBar}> 
        <Line isOpen={menu}/>
    </button>
    </>
  )
}

export default MenuButton

