import React from 'react'
import menustyle from '../styles/Home.module.scss'
import Line from './menuline'

// ${menustyle.menubarSliceGone}
 

const MenuButton = ({isOpen}) => {

  return (
    <>
    <button onClick={isOpen} className={menustyle.menuBar}> 
        <Line isCrossed={isOpen}/>
    </button>
    </>
  )
}

export default MenuButton

