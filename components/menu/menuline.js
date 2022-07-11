import React from 'react'
import menustyle from '../../styles/Home.module.scss'
const Line = ({isOpen}) => {

    const slices = [
        {
            id:1,
            style:'slice sliceAnimation'
        },
        {
            id:2,
            style:'slice2 sliceAnimation'
        },
        {
            id:3,
            style:'slice3 sliceAnimation'
        },
    ]
  return (
    <>
    {slices.map(({id, style}) =>(
        <span  key={id} className={`${ menustyle.menuBarSlice}  ${ isOpen ?  style : 'sliceAnimation'}  `}></span>
    ))}
    </>
    
  )
}
export default Line
