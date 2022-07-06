import React from 'react'
import Link from 'next/link'
import menustyle from '../styles/Home.module.scss'


const Menu = (props) => {
  return (
    <>
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