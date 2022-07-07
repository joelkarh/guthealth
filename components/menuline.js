import React from 'react'
import menustyle from '../styles/Home.module.scss'
const Line = ({isCrossed}) => {
    const slices = [
        {
            id:1,
            style:'slice'
        },
        {
            id:2,
            style:'slice2'
        },
        {
            id:3,
            style:'slice3'
        },
    ]
  return (
    <>
    {slices.map(({id, style}) =>(
        <span key={id} className={`${ isCrossed ? menustyle.menuBarSlice : menustyle.menuBarSlice && style}  `}></span>
    ))}
    </>
    
  )
}
export default Line
