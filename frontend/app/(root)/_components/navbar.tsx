import Link from 'next/link'
import React from 'react'
import NavLinks from './nav-links'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-[9999] w-full flex justify-center border-b border-gray-700 backdrop-blur-sm">
            <div className="wrapper flex items-center justify-between">
                <div className='w-full md:block'>
                    <NavLinks />
                </div>

                <div className="flex justify-end gap-3 underline font-bold text-xl w-full md:w-auto">
                    <Link href={'/'} className="w-full flex gap-2 justify-left items-center">
                        <span className="font-bold text-xl justify-end" style={{ whiteSpace: 'nowrap' }}>Docker Application.</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
