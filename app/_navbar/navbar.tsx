'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Home2, Airplane, Book1, Setting, NotificationBing, Menu, ShoppingCart, MoneyTime, ArrowRotateRight } from 'iconsax-react';
import { IoHome } from "react-icons/io5";
import { FaBarsStaggered, FaRegMoneyBill1 } from "react-icons/fa6";
import { SidebarNavList } from '../_sidebar/sidebar'
import { usePathname } from 'next/navigation';
import Notifications from './notifications';
import Button from '@/components/buttons/Button';

type NavButtonProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    active?: boolean;
    onClick?: () => void;
}

export const TopBarNavList = [
    {
        name: "notifications",
        path: "/notifications",
        icon: <NotificationBing size="28" color="currentColor" variant='Outline' />,
    },
    SidebarNavList.filter((e) => e.name === "settings")[0]
]

export const NavButton: React.FC<NavButtonProps> = ({ className, children, title, active, onClick }) => {
    return (
        <button type='button' onClick={onClick} className={["cursor-pointer hover:text-green-500 w-10 h-10 grid place-items-center relative", className || '', active && 'text-green-500'].join(" ")} title={title}>
            {children}
        </button>
    )
}

export const DropdownNav: React.FC<{ name: string; icon: React.JSX.Element; children: ReactNode }> = ({ name, icon, children }) => {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleNotification = () => { setisOpen(!isOpen) };

    function onClickOutsideNotify() {
        if (!dropdownWrapperRef.current) return;
        [`click`, `touchstart`].forEach((type: string) => {
            document.addEventListener(`click`, (evt: any) => {
                if (dropdownWrapperRef.current?.contains(evt.target)) return;
                setisOpen(false);
            });
        });
    };

    useEffect(onClickOutsideNotify, [isOpen]);

    return (
        <div className="relative" ref={dropdownWrapperRef}>
            <NavButton title={name} active={isOpen} onClick={handleNotification}>{icon}</NavButton>
            {
                isOpen &&
                <div className="absolute top-14 right-0 border rounded-lg bg-white">
                    {children}
                </div>
            }
        </div>
    )
}

const Navbar: React.FC<{ open: boolean, handleSidebar: () => void }> = ({ open, handleSidebar }) => {
    const pathname = usePathname();
    const BALANCE = '200,000';
    const [balanceIsOpen, setbalanceIsOpen] = useState<boolean>(false);
    const balanceWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleBalance = () => { setbalanceIsOpen(!balanceIsOpen) };

    function onClickOutsideBalance() {
        if (!balanceWrapperRef.current) return;
        [`click`, `touchstart`].forEach((type: string) => {
            document.addEventListener(`click`, (evt: any) => {
                if (balanceWrapperRef.current?.contains(evt.target)) return;
                setbalanceIsOpen(false);
            });
        });
    }
    useEffect(onClickOutsideBalance, [balanceIsOpen]);

    return (
        <div className={"w-full flex justify-between items-center border-b bg-white sticky top-0 h-16 z-[21]"}>
            <div className="p-2 text-gray-900 flex items-center gap-2">
                <button onClick={handleSidebar} className={['hover:text-green-500 w-10 h-10 grid place-items-center', open ? 'text-green-500' : ''].join(" ")}>
                    <FaBarsStaggered size="24" />
                </button>
            </div>
            <div className="p-2 text-gray-900 flex items-center gap-2">
                <div className="relative grid place-items-center" ref={balanceWrapperRef}>

                                    <Button onClick={handleBalance} classes="text-sm px-4 py-2">
                                    <FaRegMoneyBill1 size="18"/>
                                    BDT {BALANCE}
                                </Button>

                    {
                        balanceIsOpen &&
                        <div className="absolute top-14 w-60 aspect-video bg-white p-5 z-[2] border rounded-lg">
                            <div className="grid place-items-center">
                                <p>Your account balance</p>
                                <p className='mt-2 flex items-center gap-2'><strong>BDT{BALANCE}</strong>
                                    <button type="button" className='text-green-500 hover:text-green-600'><ArrowRotateRight size="20" color="currentColor" variant="Outline" /></button>
                                </p>
                                <Button classes="text-sm px-4 py-2">
                                    <MoneyTime size="24" color="currentColor" variant="Outline" />
                                    Add Credit
                                </Button>
                            </div>
                        </div>
                    }
                </div>
                {
                    TopBarNavList.map((e, i) =>
                        e.name === "notifications" ?
                            <DropdownNav key={i} name={e.name} icon={e.icon}><Notifications /></DropdownNav>
                            :
                            <NavButton key={i} title={e.name} active={pathname === e.path}>{e.icon}</NavButton>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;