import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <>
    <nav>
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