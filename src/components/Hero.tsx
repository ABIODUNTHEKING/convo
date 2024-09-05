import React from 'react'
import image from "/public/convo-image.jpg"
import Image from 'next/image'
import Button from './Button'

function Hero() {
  return (
    <section className='md:w-1/2 mx-auto text-gray-2 text-center'>
        <Image src={image} alt='Convo logo' className='w-[38rem]  mx-auto' />
        <div className='md:-mt-28'>
        <p className='bg-bold w-3/5 mx-auto mb-5 md:mb-10 md:text-2xl'>The Future of Community Management</p>
        <Button text='Get started' href='' bgColor='black' />
        </div>
    </section>
  )
}

export default Hero