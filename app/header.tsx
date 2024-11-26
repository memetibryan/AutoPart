"use client"

import { useState } from "react";
import Link from "next/link"
import { ROUTES } from "./config"
import Image from "next/image";

export default function Header() {

    const [selectedHead, setSelected] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 fixed h-24 flex items-center flex-col">
            <div className="max-w-screen-xl flex lg:flex-row items-center justify-between mx-auto p-4 w-full">
                <a href="/" className="flex items-center">
                    <Image src="/logo.webp" width={231} height={58} className="mr-3 w-auto h-auto" priority={true} alt="Logo" />
                </a>

                {/* <div className="flex md:order-2">
                    <button id="triggerEl" data-collapse-toggle="targetEl" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div> */}

                <div id="targetEl" className="items-center justify-between hidden md:hidden lg:order-1 lg:flex">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:space-x-5 md:space-x-4 md:mt-0 md:border-0 md:bg-white">
                        {
                            ROUTES.map((item, index) => (
                                <Link href={item.href} key={index} onClick={() => { setSelected(index) }} className={index == selectedHead ? "flex flex-center items-center py-2 pl-3 pr-4 text-white text-[13px] rounded-full uppercase bg-primary " : "block py-2 pl-3 pr-4 text-[#222222] text-[13px] uppercase"} aria-current="page">{item.caption}</Link>
                            ))
                        }
                    </ul>
                </div>

                <button className="lg:hidden" onClick={() => { setIsMobile(!isMobile) }}>
                    <svg className="w-4 h-4" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V2.5463H20V0H0ZM0 6.875V9.4213H20V6.875H0ZM0 13.75V16.2963H20V13.75H0Z" fill="#1B384F" />
                    </svg>
                </button>
            </div>

            {
                isMobile == true ? <nav className="lg:hidden pr-3 flex flex-col space-y-2 bg-white items-end self-end ">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:space-x-5 md:space-x-4 md:mt-0 md:border-0 md:bg-white">
                        {
                            ROUTES.map((item, index) => (
                                <Link href={item.href} key={index} onClick={() => { setSelected(index), setIsMobile(false) }} className={index == selectedHead ? "flex flex-center items-center py-2 pl-3 pr-4 text-white text-[13px] rounded-full uppercase bg-primary " : "block py-2 pl-3 pr-4 text-[#222222] text-[13px] uppercase"} aria-current="page">{item.caption}</Link>
                            ))
                        }
                    </ul>
                </nav> : ""
            }
        </nav>
    )
}