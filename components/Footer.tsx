import React from 'react'
import { BsQrCodeScan } from 'react-icons/bs'
import { FaLinkedinIn, FaRegCopyright } from 'react-icons/fa'
import { IoLogoInstagram, IoMdSend } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'

const Footer = () => {
  return (
    <div>
       <div className='grid grid-cols-2 p-6 lg:flex lg:justify-evenly lg:p-2 bg-black text-white md:grid-cols-3 md:p-12 sm:grid-cols-3 sm:p-10 sm:gap-12'>
       <div className='mt-12'>
            <h1 className='font-bold'>Exclusive</h1>
            <p  className='mt-2 font-bold'>Subscribe</p>
            <p  className='mt-2'>Get 10% off your first order</p>
            <div className="relative w-44">
  <input 
    type="text" 
    placeholder="Enter your email" 
    className="w-full pr-6 pl-4 py-2 border rounded mt-2 text-white bg-black"
  />
  <IoMdSend className="absolute inset-y-5 right-3 flex items-center text-gray-500 " />
</div>

          </div>

     <div className='mt-12'>
        <h1 className='font-bold'>Support</h1>
        <p  className='mt-2 text-sm'>111 Bijoy sarani,Dhaka,DH 1515.Bangladesh.</p>
        <p  className='mt-2 text-sm'>excluse@gmail.com</p>
        <p className='mt-2 text-sm'>+88015-88888-9999</p>
     </div>
        <div className='mt-12'>
          <h1 className='font-bold'>Account</h1>
          <p  className='mt-2 text-sm'>My Account</p>
          <p  className='mt-2 text-sm'>Login/Register</p>
          <p className='mt-2 text-sm'>Cart</p>
          <p className='mt-2 text-sm'>Wishist</p>
          <p className='mt-2 text-sm'>Shop</p>
        </div>
        <div className='mt-12'>
        <h1 className='font-bold'>Quick link</h1>
        <p className='mt-2 text-sm'>Privacy Policy</p>
        <p  className='mt-2 text-sm '>Term of Use</p>
        <p  className='mt-2 text-sm '>Term of Use</p>
        <p  className='mt-2 text-sm'>FAQ</p>
        <p className='mt-2 text-sm' >Contact</p>
        </div>
        <div className='mt-12 '>
            <h1 className='font-bold text-sm'>Download App</h1>
            <p  className='mt-2 mb-2 text-xs'>Save $3 with App New User City</p>

            <div className='flex gap-3 sm:grid grid-cols-2 sm:gap-36 lg:flex lg:gap-2'>         
            <BsQrCodeScan className='text-8xl mt-2 ' />

            <div className="flex flex-col items-center gap-4">
 
  <a
    href="#"
    className="flex items-center gap-2 px-2 py-1 border border-white rounded bg-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-8 h-8 fill-white"
    >
      <path d="M325.3 234.3 104.4 31.9C95.3 24.5 84.4 22.7 74.7 25.8 62.9 30 56 41.8 56 55v402c0 13.2 6.9 25 18.7 29.2 9.7 3.2 20.6 1.3 29.7-6.1l220.9-202.4c16.3-14.9 16.3-41.1 0-56.4zM374.2 208l-24.3 19.8-67.9 62.3 67.9 62.3 24.3 19.8c20.5-17.5 66.2-56.7 93.8-80.3 7.8-6.7 11.7-15.7 11.7-25.8 0-10.1-3.9-19.1-11.7-25.8-27.5-23.6-73.2-62.8-93.8-80.3z" />
    </svg>
    <div className="text-left">
      <span className="block text-xs text-white">Get it on</span>
      <span className="block text-sm font-semibold text-white ">Google Play</span>
    </div>
  </a>

  <a
    href="#"
    className="flex items-center gap-2 px-2 py-1 border border-white rounded bg-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="w-8 h-8 fill-white"
    >
      <path
        d="M318.7 268c-.4-37 16.3-64.7 50.3-85.2-19.6-28.6-49.3-44.8-86-49.4-36-4.5-76.1 21.5-89 21.5-13.1 0-49.7-20.8-75.8-20.8-55 0-114.2 40.5-114.2 116.2 0 36.2 13.4 74.2 40 106.8 21.5 27.5 47.1 58.3 81.4 57 32.3-1.3 44.7-20.9 83.4-20.9 38.6 0 49.6 20.9 83.7 20.4 35.1-.6 57.3-28 78.6-55.4 13.8-18.5 19.5-28.1 30.6-49.2-80.4-30.7-76.8-89.6-77.3-91.1zM244.8 0c-20.2 2.5-43.7 14.5-57.6 31.7-12.6 15.8-24.4 40.7-21.2 64.5 23.3 1.8 47.1-12 61-29.7 13.7-17.4 23.7-40.9 18.2-66.5z"
      />
    </svg>
    <div className="text-left">
      <span className="block text-xs text-white">Download on the</span>
      <span className="block text-sm font-semibold text-white">App Store</span>
    </div>
  </a>
</div>


           
  </div>
</div>
</div>
      
<div className='flex gap-3 justify-start items-strat text-2xl w-full  px-24  bg-black text-white md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center lg:flex lg:justify-end'>
      <TiSocialFacebook />
      <RiTwitterLine />
      <IoLogoInstagram />
      <FaLinkedinIn />     
      </div>

    
  <hr/>
       <div className='flex bg-black text-white items-center justify-center'>
       <FaRegCopyright   className='m-1'/>
        <p className='text-xs'> Copyright Rimel 2022.All right reserved</p>
      
       </div>
    </div>
  )
}

export default Footer
