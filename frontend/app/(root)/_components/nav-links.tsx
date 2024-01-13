'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Links } from '@/constants/data';

const NavLinks = () => {
    const pathname = usePathname();

    return (
<ul className="flex flex-col w-full items-start gap-5 md:flex-row text-md font-semibold cursor-pointer pb-1.5 transition-all">
    {Links.map((link) => {
        const isActive = pathname === link.href;
        return (
            <li key={link.key} className={`${isActive ? 'text-gray-200' : ''} flex-center p-medium-16 whitespace-nowrap`}>
                <Link href={link.href} className="hover:text-gray-200">
                    {link.label}
                </Link>
            </li>
        )
    })}
</ul>

    )
}

export default NavLinks