import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>

            <nav className="bg-purple-800">
                <ul className='flex h-12'>
                    <li className="mx-auto py-3 text-white">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="mx-auto py-3 text-white">
                        <Link href="/product">
                            <a>Our Products</a>
                        </Link>
                    </li>
                    <li className="mx-auto py-3 text-white">
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li className="mx-auto py-3 text-white">
                        <Link href="/todos">
                            <a>Todos</a>
                        </Link>
                    </li>
                    <li className="mx-auto py-3 text-white">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
