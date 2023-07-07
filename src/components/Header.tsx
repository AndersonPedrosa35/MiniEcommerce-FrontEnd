import { MinicartContext } from '@/context/MiniCart'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function Header() {
  const { setIsOpen } = useContext(MinicartContext)
  return (
    <div className='flex justify-around items-center p-8 bg-blue-800 text-white'>
      <Link href='#'>
        LINK
      </Link>
      <Link href='#'>
        LINK
      </Link>
      <Link href='#'>
        LINK
      </Link>
      <Link href='#'>
        LINK
      </Link>
      <button type='button' className='p-4' onClick={() => setIsOpen(true)}>
        MINICART
      </button>
    </div>
  )
}
