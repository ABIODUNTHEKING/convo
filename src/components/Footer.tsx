import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='text-center md:flex md:justify-between bg-black text-white p-10  text-sm'>
        <p className='mb-2 md:mb-0'>&#169; Framer Inc. 2023</p>
        <div className='flex gap-5 justify-center'>
            <Link href="">Instagram</Link>
            <Link href="">Email</Link>
        </div>
    </footer>
  )
}

export default Footer