'use client'

import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-24 md:h-32 z-50 bg-black flex items-center justify-between p-8 md:px-28 transition-shadow duration-300 ${scrolled ? "shadow-md border-b border-gray-200" : ""}`}>

            <Image
                src="/logo1.png"
                alt="logo"
                width={300} height={100}
                className="w-36 md:w-52 h-auto object-contain"
            />

            <button
                className="md:hidden flex flex-col justify-center items-center  md:mr-0 mr-5"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
            >
                <span className="block w-8 h-1 bg-blue-400 mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-blue-400 mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-blue-400 mb-1 rounded"></span>

            </button>

            <div className='hidden md:flex items-center gap-10'>
                <Link
                    href="/"
                    className={`text-blue-500 border-b-2 transition ${pathname === "/" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                        }`}
                >
                    Inicio
                </Link>

                <Link
                    href="/servico"
                    className={`text-blue-500 border-b-2 transition ${pathname === "/servico" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                        }`}
                >
                    Serviços
                </Link>

                <Link
                    href="/portfolio"
                    className={`text-blue-500 border-b-2 transition ${pathname === "/portfolio" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                        }`}
                >
                    Portfólio
                </Link>

                <Link
                    href="/sobre"
                    className={`text-blue-500 border-b-2 transition ${pathname === "/sobre" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                        }`}
                >
                    Sobre Nós
                </Link>
            </div>

            {open && (
                <div className="md:hidden absolute top-0 left-0 w-full h-96 bg-white flex flex-col items-center justify-center gap-6">

                    <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}>
                        <IoIosCloseCircleOutline className='text-black text-3xl' />
                    </div>

                    <div className='flex flex-col items-center gap-4'>
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className={`text-blue-500 border-b-2 transition ${pathname === "/" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                                }`}
                        >
                            Inicio
                        </Link>

                        <Link
                            href="/servico"
                            onClick={() => setOpen(false)}
                            className={`text-blue-500 border-b-2 transition ${pathname === "/servico" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                                }`}
                        >
                            Serviços
                        </Link>

                        <Link
                            href="/portfolio"
                            onClick={() => setOpen(false)}
                            className={`text-blue-500 border-b-2 transition ${pathname === "/portfolio" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                                }`}
                        >
                            Portfólio
                        </Link>

                        <Link
                            href="/sobre"
                            onClick={() => setOpen(false)}
                            className={`text-blue-500 border-b-2 transition ${pathname === "/sobre" ? "border-blue-500" : "border-transparent hover:border-blue-500"
                                }`}
                        >
                            Sobre Nós
                        </Link>
                    </div>

                </div>
            )}

        </div>
    )
}