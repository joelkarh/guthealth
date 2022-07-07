import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import menustyle from '../styles/Home.module.scss'
import MenuButton from './menubutton'


const Menu = () => {
    const [menu, setMenu] = useState(false)
    const openMenu = () =>{
        setMenu(!menu)
        console.log(menu)
    }
  return (
    <>
    <MenuButton isOpen={openMenu}/>
    <nav className={`${menustyle.display} `}>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Testemonials</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Book a Call</a>
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Menu