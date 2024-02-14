'use client'

import React from 'react';
import { Home2, Airplane, Book1, Setting, Home, Calendar } from 'iconsax-react';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { BsPassport } from 'react-icons/bs';

export type NavItemProps = {
    to: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    active?: boolean;
}

// NavLink
export const NL: React.FC<NavItemProps> = ({ className, children, to, title, active }) => {
    return (
        <Link href={to} className={["cursor-pointer hover:text-green-500 w-10 h-10 grid place-items-center relative", className || '', active && 'text-green-500'].join(" ")} title={title}>
            {children}
        </Link>
    )
}

export const SidebarNavList = [
    {
        name: "dashboard",
        path: "/dashboard",
        icon: <Home2 size="28" color="currentColor" variant='Outline' />,
    },
    {
        name: "visa",
        path: "/visa",
        icon: <BsPassport size="28" color="currentColor" />,
    },
    {
        name: "flight",
        path: "/flight",
        icon: <Airplane size="28" color="currentColor" variant='Outline' />,
    },
    {
        name: "settings",
        path: "/settings",
        icon: <Setting size="28" color="currentColor" variant='Outline' />,
    },
]

const Sidebar: React.FC<{ open: boolean, className?: string }> = ({ open, className }) => {
    const topList = SidebarNavList.filter((e) => e.name !== "settings")
    const bottomList = SidebarNavList.filter((e) => e.name === "settings")

    const pathname = usePathname()

    return (
        // Flex item 1
        <div className={["flex-shrink-0 w-14 sm:w-16 relative z-[1]", className || ''].join(" ")}>
            {/* Fixed inside flex item */}
            <div className="fixed left-0 top-0 w-14 sm:w-16 h-[100svh] bg-white text-gray-600 border-r">
                <div className="h-full py-4 px-2 flex flex-col justify-between gap-5">
                    <div className="flex flex-col items-center gap-5">
                        <Link href="/" className='w-8 h-8 overflow-hidden'>
                            <img src="/assets/images/logo-sm.png" alt="alt placeholder" className="w-8 h-8 object-cover" />
                        </Link>
                        {topList.map((e, i) =>
                            <NL to={e.path} key={i} title={e.name} active={pathname === e.path}>{e.icon}</NL>
                        )}
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        {bottomList.map((e, i) =>
                            <NL to={e.path} key={i} title={e.name} active={pathname === e.path}>{e.icon}</NL>
                        )}
                        <NL to='/user/sign-in'>
                            <img src="https://i.pravatar.cc/300" alt="alt placeholder" className="w-8 h-8 mx-auto mb-5 rounded-full" />
                            <span className="absolute right-0 top-0 w-5 h-5 grid place-items-center -mt-2 text-xs bg-red-500 text-white font-medium shadow-lg rounded-full border-2 border-white">3</span>
                        </NL>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;