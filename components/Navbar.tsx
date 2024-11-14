"use client"
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { PiHeartStraightThin } from 'react-icons/pi'

const Navbar= ()  => {

 
  
  return (
    <div>
      <div className='flex text-xs lg:text-sm gap-2 lg:flex justify-evenly bg-black text-white  md:text-sm  '>
            <p className=''>Summer Sole For All Suits And Free Express Delivery - OFF 50%!  <a href='#' className='underline'>Shop Now</a></p>
            <div className=' flex'>
                <p>English</p>
                <FaAngleDown  className='m-1'/>
            </div>
            
        </div>
        <div className='gap-2 text-sm p-4 lg:p-5 lg:text-sm flex justify-evenly sm:p-2 sm:grid-cols-1 sm:text-sm '>
            <h1 className='font-bold'>Exclusive</h1>
                <ul className='flex gap-8'>
                    <li><a href='#' className='underline'>Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href='#'>About</a></li>
                     <li><a href="#">Sign-Up</a></li>
                    
                </ul>
                <div className='flex gap-3 '>
                    <button className='hidden lg:flex lg:py-2 px-2 items-center space-x-4 gap-10  bg-neutral-200 text-black rounded '>What are you looking for? <IoIosSearch className='' /></button>
                    <div className='flex m-1  space-x-4 text-2xl'>
                    <PiHeartStraightThin />

                    {/* <div className="relative">                     */}
                    <IoCartOutline />
                    {/* {cartItemCount > 0 && ( <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
                      )}
                    </div> */}
                    
                    <FiUser className='bg-red-600 text-white rounded-full'/>
                   
                    </div>
                   

                </div>
               
    </div>

    <hr />
    </div>
  )
}

export default Navbar



