'use client'

import React, { useEffect, useRef, useState } from 'react';
import { MoneyTime, ArrowRotateRight, User, Lock } from 'iconsax-react';
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavButtonProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    active?: boolean;
    onClick?: () => void;
}

export const TopBarNavList = [
    {
        name: "about us",
        path: "/about-us",
    },
    {
        name: "contact us",
        path: "/contact-us",
    },
]

export const NavButton: React.FC<NavButtonProps> = ({ className, children, title, active, onClick }) => {
    return (
        <button type='button' onClick={onClick} className={["text-white hover:text-gray-100 relative whitespace-nowrap capitalize text-lg", className || '', active && 'text-gray-500'].join(" ")} title={title}>
            {children}
        </button>
    )
}

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setisOpen] = useState<boolean>(false);
    const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleAccount = () => { setisOpen(!isOpen) };

    function onClickOutsideAccount() {
        if (!dropdownWrapperRef.current) return;
        [`click`, `touchstart`].forEach((type: string) => {
            document.addEventListener(`click`, (evt: any) => {
                if (dropdownWrapperRef.current?.contains(evt.target)) return;
                setisOpen(false);
            });
        });
    }
    useEffect(onClickOutsideAccount, [isOpen]);

    return (
        <div className={["w-full flex justify-between items-center h-20 px-4 gap-5"].join(" ")}>
            <div className="">
                <Link href="/" className={['text-white uppercase hover:text-gray-100 font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl'].join(" ")}>
                    Guideasy
                </Link>
            </div>
            <div className="text-gray-900 flex items-center gap-8">
                <div className="hidden md:flex gap-8 items-center">
                    {
                        TopBarNavList.map((e, i) =>
                            <NavButton key={i} title={e.name} active={pathname === e.path}>{e.name}</NavButton>
                        )
                    }
                </div>
                <div className="relative grid place-items-center z-10" ref={dropdownWrapperRef}>
                    <button onClick={handleAccount} className="text-green-500 bg-white hover:bg-gray-100 font-medium rounded-lg text-md sm:text-lg px-4 py-2 text-center inline-flex items-center gap-2">
                        <User size="20" color="currentColor" variant="Outline" />Account
                    </button>

                    {
                        isOpen &&
                        <div className="absolute right-0 top-[calc(100%_+_4px)] w-full bg-white rounded-xl border shadow p-2 space-y-1">
                            <Link href="/user/sign-in" className="w-full text-green-500 bg-white hover:bg-gray-100 font-medium rounded-lg sm:text-md text-sm px-4 py-2 text-center flex items-center gap-2">
                                <Lock size="20" color="currentColor" variant="Outline" />Sign In
                            </Link>
                            <Link href="/user/sign-up" className="w-full text-green-500 bg-white hover:bg-gray-100 font-medium rounded-lg sm:text-md text-sm px-3 py-2 text-center flex items-center gap-2">
                                <User size="20" color="currentColor" variant="Outline" />Sign Up
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;