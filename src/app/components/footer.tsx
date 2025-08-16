import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-black w-full h-auto flex flex-col gap-4 p-10'>

            <div className='flex flex-col md:flex-row justify-evenly gap-10'>

                <div className='flex flex-col gap-4'>

                    <h1 className='text-white text-2xl font-bold'>Primeiro Ato</h1>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>Agência criativa de marketing e tecnologia, com atuação nacional.</h2>
                        <h2 className='text-white'>Localização: Rua Gonçalves Dias, 110 - Sala 18</h2>
                        <h2 className='text-white'>Centro - Porto Velho - RO</h2>
                    </div>

                    <div className='flex gap-4 py-2'>

                        <Link href="https://www.facebook.com/sscontabilidade" target="_blank">
                            <FaFacebook className='text-white text-3xl' />
                        </Link>

                        <Link href="https://www.instagram.com/sscontabilidadeconsultoria/?__pwa=1#" target="_blank">
                            <FaInstagram className='text-white text-3xl' />
                        </Link>

                        <Link href="https://wa.me/5569993533868" target="_blank">
                            <FaWhatsapp className='text-white text-3xl' />
                        </Link>

                    </div>

                </div>

                <div className='flex flex-col gap-4'>

                    <h2 className='text-white text-2xl font-bold'>Entre em contato:</h2>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>Telefone: +55 (69) 99325-7997</h2>
                        <h2 className='text-white'>Telefone: +55 (69) 98117-5481</h2>
                        <h2 className='text-white'>primeiroatodigital@gmail.com</h2>
                    </div>

                </div>

            </div>

            <div className="flex justify-center items-center pt-4">
                <p className="text-white text-sm flex gap-1 justify-center text-center">Copyright 2025 |<Link className="border-b hover:text-green-600" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
            </div>

        </div>
    )
}
