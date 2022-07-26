import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import menustyle from '../../styles/Home.module.scss'
import MenuButton from './menubutton'


const Menu = () => {
    const [menu, setMenu] = useState(false)
    const menuList = [
        {
            id: 1,
            href: '/',
            menuItem:'Home'
        },
        {
            id: 2,
            href: '#',
            menuItem:'About'
        },
        {
            id: 3,
            href: '#',
            menuItem:'Services'
        },
        {
            id: 4,
            href: '#',
            menuItem:'Contact'
        },
        {
            id: 5,
            href: '/',
            menuItem:'Discovery call',
            style:'booking-btn'
        },
    ]
    //menu = false 

return (
    <>
    <MenuButton menu = {menu} setMenu={setMenu} />
    <nav className={`${menustyle.display} ${menu ? 'open sliceAnimationOut' : 'closed sliceAnimationOut'} `}>
        <ul>
            { menuList.map(({id, href, menuItem, style})=>(
            <li className={style} key={id}>
                <Link href={href}>
                    <a>{menuItem}</a>
                </Link>
            </li>
            ))
            }
        </ul>
    </nav>
    </>
  )
}

export default Menu