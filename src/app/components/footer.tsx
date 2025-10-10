import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-black w-full h-auto flex flex-col gap-4 p-10'>

            <div className='flex flex-col md:flex-row justify-evenly gap-10'>

                <div className='flex flex-col gap-4'>

                    <h1 className='text-white text-2xl font-bold'>Mahal Sushi Bar</h1>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>Experimente o melhor da culinária japonesa com ingredientes frescos.</h2>
                        <h2 className='text-white'>Apenas Delivery</h2>
                    </div>

                    <div className='flex gap-4 py-2'>

                        <Link
                            href="https://www.facebook.com/mahalsushibar"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <FaFacebook className='text-white text-3xl' />
                        </Link>

                        <Link
                            href="https://www.instagram.com/mahalsushibar/?__pwa=1#"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <FaInstagram className='text-white text-3xl' />
                        </Link>

                        <Link
                            href="https://wa.me/5569999726369?text=Olá%2C+gostaria+de+fazer+um+pedido%21"
                            target="_blank"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className='text-white text-3xl' />
                        </Link>

                    </div>

                </div>

                <div className='flex flex-col gap-4'>

                    <h2 className='text-white text-2xl font-bold'>Horário de Funcionamento</h2>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>Terça a Domingo - 19:00 às 23:00</h2>
                    </div>

                </div>

            </div>

            <div className="flex justify-center items-center pt-4">
                <p className="text-white text-sm flex gap-1 justify-center text-center">Copyright 2025 |<Link className="border-b hover:text-green-600" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
            </div>

        </div>
    )
}
