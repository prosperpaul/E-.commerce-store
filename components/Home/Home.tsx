import React from 'react'
import { FaAngleDown, FaArrowRight, FaArrowUp, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { IoIosSearch, IoLogoInstagram, IoMdHeartEmpty, IoMdSend } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { PiDesktopLight, PiHeadphones, PiHeartStraightThin } from 'react-icons/pi';
import Image  from 'next/image'
import { AiOutlineApple } from 'react-icons/ai';
import { RxBorderDotted } from 'react-icons/rx';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { TbEye } from 'react-icons/tb';
import { FiSmartphone } from 'react-icons/fi';
import { BsQrCodeScan, BsShieldCheck, BsSmartwatch } from 'react-icons/bs';
import { SlCamera } from 'react-icons/sl';
import { LuGamepad } from 'react-icons/lu';
import { RiCaravanLine, RiTwitterLine } from 'react-icons/ri';
import { MdHeadsetMic } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='flex text-xs lg:text-sm gap-2 lg:flex justify-evenly bg-black text-white  p-2  md:text-sm  '>
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
                    <div className='flex m-1  space-x-4'>
                    <PiHeartStraightThin />
                    <IoCartOutline />
                    </div>
                   
                   
                </div>
               
    </div>

    <hr />

    <div className=' m-6  lg:flex-row lg:justify-evenly lg:text-sm font-bold flex flex-col sm:items-center '>
        <div className='pl-12  gap-2 grid grid-cols-2 md:ml-2 sm:mt-8 sm:grid-cols-3 sm:gap-8 lg:flex lg:flex-col '>    
            <div className=' gap-10 lg:flex '>
            <p>Woman&apos;s Fashion</p>
            <LiaGreaterThanSolid className='hidden lg:flex font-bold sm:hidden' />
            </div>
        <div className='flex gap-10 '>
        <p>Men&apos;s Fashion</p>
        <LiaGreaterThanSolid className='hidden lg:flex items-center mt-1 font-bold sm:hidden'  />
        </div>
        
        <p>Electronics</p>
        <p>Home & lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby&apos;s & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
        </div>
        <div className='hidden lg:flex h-42 w-1  sm:hidden'>
        <Image src={'/images/Line 4.png'} alt='line' width={3} height={1} className='h-56 '/>
        </div>
        

        <div className='flex w-full  lg:flex lg:w-[60%] lg:h-[50%] bg-black h-60 mr-40 text-white  sm:w-11/12 sm:m-10 '>
        

        <div className='w-80 p-6 lg:w-96 sm:w-full' >
           <div className=' flex gap-2  md:gap-2 sm:text-xs '>
           <AiOutlineApple className=' text-6xl  md:text-6xl ' />
           <p className='mt-4 text-sm lg:mt-4 font-thin md:mt-5 md:text-sm sm:mt-6'>iphone 14 Series</p>
           </div>

           <h1 className='text-xl lg:text-3xl lg:font-bold lg: p-2 md:text-3xl sm:text-2xl'>Up to 10%</h1>
           <h1  className='text-xl lg:text-3xl lg:font-bold lg:p-2 md:text-3xl sm:text-2xl'>off Voucher</h1>

           <div className='flex gap-2 p-2'>
           <a href='#' className='underline'>Shop Now</a>
           <FaArrowRight className='m-1' /> 
           </div>
            
           

           </div>
             
           <div className=''>
           <Image src={'/images/hero_endframe.png'} alt='image' height={25} width={300} className='h-56'/>
           <div className='flex justify-left text-2xl ' >
           <RxBorderDotted />
           </div>
            
        </div>
           </div>
    </div>


    <div className='px-16 m-1'>
         <div className='bg-red-600 w-5 h-10  rounded flex mb-2 '>
         <h2 className='ml-12 text-red-600 mt-1 font-bold'>Today&apos;s</h2>
             </div> 

             <div className='flex gap-10'>
                <h1 className='font-bold text-2xl'>Flash Sales</h1>
                <div>
                   <p  className='text-sm font-bold' >Days</p>
                   <h1 className='font-bold text-3xl'>03 <span className='hidden text-red-500 ml-5 sm:hidden'>:</span></h1>
                   
                </div>

                <div>
                   <p className='text-sm font-bold'>Hours</p>
                   <h1 className='font-bold text-3xl'>23 <span className='hidden text-red-500 ml-5 sm:hidden'>:</span> </h1>
                   
                </div>

                <div>
                   <p className='text-sm font-bold'>Mintues</p>
                   <h1 className='font-bold text-3xl'>19 <span className='hidden text-red-500 ml-5 sm:hidden'>:</span></h1>
                   
                </div>

                <div>
                   <p className='text-sm font-bold'>Seconds</p>
                   <h1 className='font-bold text-3xl'>56 </h1>
                   
                </div>

                <div className='flex items-center space-x-2 ml-auto  '>
                    <div className='bg-zinc-200  sm:flex hidden rounded-full p-2'>
                    <FaArrowLeftLong  />
                    </div>
                <div className='bg-zinc-200 sm:flex hidden  rounded-full p-2' >
                <FaArrowRightLong />
                </div>
                
                </div>
                </div>
                  
               
              <div className='mt-10 grid grid-cols-1 gap-24 md:grid-cols-2   md:gap-4 lg:flex sm:grid-cols-2' >
             


<div className="w-60 bg-gray-100 rounded-lg p-6 h-48 relative sm:mb-28 ">
      
      <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
        -40%
      </div>

    
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-xl" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-xl" />
        </div>
      </div>

    
      <div className="flex justify-center mt-6">
        <Image
          src="/images/Frame 611.png" 
          alt="Gaming Keyboard"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      
      <div className="mt-4">
       
        <h2 className='font-bold text-sm mt-8'>HAVOT HV-G92 Gamepad</h2>
                   <p className='text-red-500 font-bold'>$120 <span className='line-through text-stone-400 font-bold'>$160</span></p>
                   <div className='flex gap-2'>
                   <Image src={'/images/Five star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 '>(88)</p>
                   </div>
      </div>
    </div>

               
                  
               <div className="w-60 bg-gray-100 rounded-lg p-6 h-48 relative ">
     
      <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
        -35%
      </div>

   
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-xl" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-xl" />
        </div>
      </div>

    
      <div className="flex justify-center mt-6">
        <Image
          src="/images/keyboard.png" 
          alt="Keyboard"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      
      <div className="mt-4">
        <button className="w-full  h-10 bg-black text-white py-2 rounded  text-center">
          Add To Cart
        </button>
        <h2 className='font-bold text-sm mt-8'>AK-900 Wired Keyboard</h2>
                   <p className='text-red-500 font-bold'>$960 <span className='line-through text-stone-400 font-bold '>$1160</span></p>
                   <div className='flex gap-2'>
                   <Image src={'/images/Five star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 '>(75)</p>
                   </div>
      </div>
    
         </div>

<div className="w-60 bg-gray-100 rounded-lg p-6 h-48 relative ">
  
      <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
        -30%
      </div>

      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-xl" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-xl" />
        </div>
      </div>

    
      <div className="flex justify-center mt-6">
        <Image
          src="/images/display.png" 
          alt="tv"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      
      <div className="mt-4">
      <h2 className='font-bold text-sm mt-16'>IPS LCD Gaming Monitor</h2>
                   <p className='text-red-500 font-bold'>$370 <span className='line-through text-stone-400 font-bold'>$400</span></p>
                   <div className='flex gap-2'>
                   <Image src={'/images/Four star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 '>(99)</p>
                   </div>
      </div>
</div>


                    
<div className="w-60 bg-gray-100 rounded-lg p-6 h-48 relative ">
  
      <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
        -25%
      </div>


      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-xl" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-xl" />
        </div>
      </div>

    
      <div className="flex justify-center mt-6">
        <Image
          src="/images/chair.png" 
          alt="chair"
          width={80}
          height={50}
          className="object-contain"
        />
      </div>

      
      <div className="mt-4">
      <h2 className='font-bold text-sm mt-8'>S-series Comfort Chair</h2>
                   <p className='font-bold text-red-500'>$375 <span className='line-through text-stone-400 font-bold'>$500</span></p>
                   <div className='flex gap-2'>
                   <Image src={'/images/Four Half star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 '>(99)</p>
                   </div>
      </div>
    </div>
                   
                    </div>
         
                    <div className='flex items-center justify-center'>
                    <button className='bg-red-500 rounded text-white px-10 sm:py-4 m-36'>View All Products</button>
                    </div>

                    <hr className='mb-12 md:mb-6' />
                    
                 
                  
                   
    </div>

    <div className='px-16 mt-2 '>
         <div className='bg-red-600 w-5 h-10  rounded flex mb-2 '>
         <h2 className='ml-12 text-red-600 mt-1 font-bold'>Categories</h2>
             </div> 

             
            <div className='flex'>
               <h1 className='font-bold text-2xl'>Browse By Category</h1>

               <div className='hidden lg:flex md:flex items-center space-x-2 ml-auto '>
                    <div className='bg-zinc-200   rounded-full p-2'>
                    <FaArrowLeftLong  />
                    </div>
                <div className='bg-zinc-200   rounded-full p-2' >
                <FaArrowRightLong />
                </div>
                
                
                </div>
                
            </div>

            <div className=' grid-cols-2 justify-between mt-4 grid md:grid-cols-3 gap-2 items-center sm:grid-cols-2 lg:flex'>
                  <div className='border border-b py-2 px-8 bg-transparent  '>
                  <FiSmartphone className='m-3 text-2xl' />
                  <p>Phones</p>
                  </div>
                 
                 <div  className='border border-b py-2 px-6 bg-transparent  '>
                  <PiDesktopLight  className='ml-5 mt-3 text-4xl'/>
                  <p>Computers</p>
                 </div>
                 
                 <div  className='border border-b py-2 px-6 bg-transparent  '>
                 <BsSmartwatch  className='ml-6 mt-3  text-4xl ' />
                 <p className='mt-2'>SmartWatch</p>
                 </div>
                
                 <div  className='border border-b py-2 px-8 bg-transparent  '>
                   <SlCamera  className='m-3 text-4xl' />
                   <p className='mb-2'>Camera</p>
                 </div>
                
                 <div  className='border border-b py-2 px-6 bg-transparent  '>
                  <PiHeadphones  className='ml-7 text-4xl mt-2' />
                  <p className='mt-2'>HeadPhones</p>
                 </div>
                 
                 <div  className='border border-b py-2 px-9 bg-transparent  '>
                 <LuGamepad  className='m-3 text-2xl'/>
                 <p>Gaming</p>
                 </div>
                 
                 </div>             
    </div>

    <hr className='m-12'/>
    <div className='px-16 mt-2 '>
         <div className='bg-red-600 w-5 h-10  rounded flex mb-2  '>
         <h2 className='ml-12 text-red-600 text-sm font-bold'>This Month</h2>
             </div> 

             
            <div className='flex '>
               <h1 className='font-bold text-2xl'>Best Selling Products</h1>

              <button className='ml-auto px-5 py-2 rounded text-white bg-red-500'>View All</button>
                
            </div>
             
                    
    <div className='grid justify-between gap-20 m-3 md:grid-cols-3 md:gap-20 lg:flex sm:grid-cols-2 sm:gap-20'>         
    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-4">
        <Image
          src="/images/coat.png" 
          alt="Product"
          width={120}
          height={120}
          className="object-cover "
        />
       
      </div>
      <h2 className='mt-10 text-left font-bold text-sm'>The north coat</h2>
                    <p className='text-red-500 font-bold text-sm'>$260 <span className='line-through text-stone-400 font-bold text-sm'>$360</span></p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Five Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm '>(65)</p>
                   </div>
    </div>  
    
    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-10">
        <Image
          src="/images/bag.png" 
          alt="Product"
          width={150}
          height={150}
          className="object-cover "
        />
       
      </div>
      <h2 className='mt-10 text-left font-bold text-sm'>Gucci duffle bag</h2>
                    <p className='text-red-500 font-bold text-sm'>$960 <span className='line-through text-stone-400 font-bold text-sm'>$1160</span></p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Four Half Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm'>(65)</p>
                   </div>
                          
    </div>  


    
               
    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-4">
        <Image
          src="/images/Frame 610.png" 
          alt="Product"
          width={150}
          height={150}
          className="object-cover  "
        />
       
      </div>
      <h2 className='mt-10 text-left font-bold text-sm'>RGB  liquid CPU Cooler</h2>
                    <p className='text-red-500 font-bold text-sm'>$160 <span className='line-through text-stone-400 font-bold text-sm'>$170</span></p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Four Half Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm'>(65)</p>
                   </div>
    </div>  

    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
    
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-4">
        <Image
          src="/images/shelf.png" 
          alt="Product"
          width={120}
          height={120}
          className="object-cover "
        />
       
      </div>
      <h2 className='mt-10 text-left font-bold text-sm'>Small Book Shelf</h2>
                    <p className='text-red-500 font-bold text-sm'>$360 </p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Five Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm '>(65)</p>
                   </div>
                          
    </div>  

    </div>

            </div>
            <div className= ' flex  justify-around p-16 mt-24 '>
         <div className='text-white bg-black w-4/6  sm:w-[90%]'> 
          <p className='text-green-400 mb-4 mt-8 ml-8 font-bold'>Categories</p>    
          <h1 className='ml-8 font-bold text-4xl '>Enhance Your</h1>
          <h1 className='ml-8 font-bold text-4xl'>Music Experience</h1>
          <div className='flex gap-3 mt-4 ml-8'>
            <div className=' bg-white text-black rounded-full  md:text-xs md:rounded-2xl sm:text-xs sm:text-center'>
             <h2 className='px-4 '>23</h2>
            <p className='md:text-center'>Hours</p>
             </div>
             <div className='text-sm text-black  bg-white rounded-full md:text-xs md:rounded-2xl sm:text-xs sm:text-center'>
             <h2 className='px-4'>05</h2>
            <p className='text-center'>Days</p>
             </div>
             <div className='text-sm  bg-white text-black rounded-full md:text-xs sm:text-xs sm:text-center'>
             <h2 className='px-4 text-center md:rounded-r-2xl'>59</h2>
            <p>Minutes</p>
             </div>
             <div className=' lg:text-sm lg:text-center  bg-white text-black rounded-full md:text-xs md:rounded-2xl sm:text-xs sm:text-center '>
             <h2 className= 'px-3 text-center md:text-xs'>35</h2>
            <p>Seconds</p>
             </div>
             
          </div>

          <button className=' mt-8 bg-green-400 text-white px-3 py-2 rounded text-center ml-8 mb-8'>Buy Now!</button>
         </div>
         
         <div className='bg-gradient-to-r from-black via-black/50 to-gray-900 w-4/6 md:w-2/3 
             '>
         <Image src={'/images/jambox.png'} alt='jambox' width={400} height={300} className='hidden lg:flex lg:w-80 mix-blend-overlay mt-12 ml-24 md:ml-1 md:flex sm:ml-1 sm:mt-24 sm:flex sm:w-[13rem]'/>
         </div>
         
        </div>
        
        <div className='px-16 mt-2'>
         <div className='bg-red-600 w-5 h-10  rounded flex mb-2  '>
         <h2 className='ml-12 text-red-600 text-sm font-bold '>Our Products</h2>
             </div> 

             
            <div className='flex'>
               <h1 className='font-bold text-2xl'>Explore Our Products</h1>

               <div className=' hidden lg:flex md:flex sm:flex items-center space-x-2 ml-auto '>
                    <div className='bg-zinc-200   rounded-full p-2'>
                    <FaArrowLeftLong  />
                    </div>
                <div className='bg-zinc-200   rounded-full p-2' >
                <FaArrowRightLong />
                </div>
                
                
                
                </div>
            </div>
           <div className='grid justify-between grid-cols-1 gap-28 mt-12 lg:grid-cols-4 md:grid-cols-3 md:gap-28 sm:grid-cols-2 sm:gap-28'>
                
            <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-2">
        <Image
          src="/images/dog.png" 
          alt="Product"
          width={100}
          height={50}
          className=" object-cover "
        />
       
      </div>
      <h2 className='mt-10 text-left text-sm font-bold'>Breed Dry Dog Food</h2>
                 
                    <p className='text-red-500 font-bold text-sm'>$1000 </p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Three Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm'>(35)</p>
                   </div>
                          
    </div> 

    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-2">
        <Image
          src="/images/camera.png" 
          alt="Product"
          width={100}
          height={50}
          className=" object-cover "
        />
       
      </div>
     
      <button className='bg-black  mt-2 px-1 py-2 w-44 text-white'>Added To Cart</button>
      
      <h2 className='mt-10 text-left text-sm  font-bold' >CANON EOS DSLR Camera</h2>
                 
                    <p className='text-red-500 font-bold text-sm'>$360 </p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Four Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm'>(95)</p>           
                   
                   </div>
                          
    </div> 

    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-2">
        <Image
          src="/images/laptop.png" 
          alt="Product"
          width={100}
          height={50}
          className=" object-cover "
        />
       
      </div>
      <h2 className='mt-24 text-left text-sm font-bold '>ASUS FHD Gaming LapTop</h2>
                 
                    <p className='text-red-500 font-bold text-sm'>$700 </p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Five Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm '>(325)</p>
                   </div>          
    </div> 

    <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
      
      <div className="absolute top-3 right-3 space-y-2">
        <div className="bg-white rounded-full p-2 shadow">
          <IoMdHeartEmpty className="text-lg" />
        </div>
        <div className="bg-white rounded-full p-2 shadow">
          <TbEye className="text-lg" />
        </div>
      </div>

     
      <div className="flex justify-center mt-2">
        <Image
          src="/images/cream.png" 
          alt="Product"
          width={100}
          height={50}
          className=" object-cover "
        />       
      </div>
      <h2 className='mt-24 text-left ext-sm font-bold '>Curology Product Set</h2>
                 
                    <p className='text-red-500 font-bold text-sm'>$500 </p>
                    <div className='flex gap-2'>
                   <Image src={'/images/Four Star.png'} alt='star' width={70} height={10} className=''/>
                   <p className='text-stone-400 font-bold text-sm'>(145)</p>
                   </div>       
                          
    </div>
     
   </div>
 </div>




 <div className="grid mt-32 justify-center m-10 mr-44 gap-36  lg:grid-cols-4 md:grid-cols-3 md: md:mr-8 sm:grid-cols-2 sm:p-8">
  <div className="w-50 bg-gray-100 rounded-lg p-6 h-48 relative md:w-[12rem] ">
    <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
      NEW
    </div>
    <div className="absolute top-3 right-3 space-y-2">
      <div className="bg-white rounded-full p-2 shadow">
        <IoMdHeartEmpty className="text-xl" />
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <TbEye className="text-xl" />
      </div>
    </div>
    <div className="flex justify-center mt-6 md:mt-8 ">
      <Image
        src="/images/toy-car.png"
        alt="car"
        width={140}
        height={140}
        className="object-contain"
      />
    </div>
    <div className="mt-4">
      <h2 className="font-bold text-sm mt-16">Kids Electric Car</h2>
      <p className="text-red-500 font-bold">$960 </p>
      <div className="flex gap-2">
        <Image
          src="/images/Five star.png"
          alt="star"
          width={70}
          height={10}
        />
        <p className="text-stone-400">(65)</p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <div className="relative w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div className="w-5 h-5 bg-red-600 rounded-full"></div>
      </div>
    </div>
  </div>

  <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
    <div className="absolute top-3 right-3 space-y-2">
      <div className="bg-white rounded-full p-2 shadow">
        <IoMdHeartEmpty className="text-lg" />
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <TbEye className="text-lg" />
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <Image
        src="/images/boot.png"
        alt="Product"
        width={120}
        height={120}
        className="object-cover"
      />
    </div>
    <h2 className="mt-10 text-left font-bold text-sm">Jr. Zoom Soccer Cleats</h2>
    <p className="text-red-500 font-bold text-sm">$1160 </p>
    <div className="flex gap-2">
      <Image src="/images/Five Star.png" alt="star" width={70} height={10} />
      <p className="text-stone-400 font-bold text-sm">(35)</p>
    </div>
    <div className="flex items-center gap-4 mt-2">
      <div className="relative w-5 h-5 rounded-full bg-black flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-yellow-200"></div>
      </div>
      <div className="w-5 h-5 bg-red-600 rounded-full"></div>
    </div>
  </div>

  <div className="w-48 bg-gray-100 rounded-lg p-6 h-48 relative">
    <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
      NEW
    </div>
    <div className="absolute top-3 right-3 space-y-2">
      <div className="bg-white rounded-full p-2 shadow">
        <IoMdHeartEmpty className="text-xl" />
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <TbEye className="text-xl" />
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <Image
        src="/images/gamepad.png"
        alt="car"
        width={120}
        height={120}
        className="object-contain"
      />
    </div>
    <div className="mt-4">
      <h2 className="font-bold text-sm mt-16">GP11 Shooter USB Gamepad</h2>
      <p className="text-red-500 font-bold">$660 </p>
      <div className="flex gap-2">
        <Image
          src="/images/Four Half star.png"
          alt="star"
          width={70}
          height={10}
        />
        <p className="text-stone-400">(55)</p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <div className="relative w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
        <div className="w-5 h-5 bg-red-600 rounded-full"></div>
      </div>
    </div>
  </div>

  <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 relative">
    <div className="absolute top-3 right-3 space-y-2">
      <div className="bg-white rounded-full p-2 shadow">
        <IoMdHeartEmpty className="text-lg" />
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <TbEye className="text-lg" />
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <Image
        src="/images/green j.png"
        alt="Product"
        width={120}
        height={120}
        className="object-cover "
      />
    </div>
    <h2 className="mt-10 text-left font-bold text-sm">Quilted Satin Jacket</h2>
    <p className="text-red-500 font-bold text-sm">$660 </p>
    <div className="flex gap-2">
      <Image
        src="/images/Four Half Star.png"
        alt="star"
        width={70}
        height={10}
        
      />
      <p className="text-stone-400 font-bold text-sm">(35)</p>
    </div>
    <div className="flex items-center gap-4 mt-2">
      <div className="relative w-5 h-5 rounded-full bg-black flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="w-5 h-5 bg-red-600 rounded-full"></div>
    </div>
  </div>
 
</div>
<div className='flex justify-center items-center'>
<button className='bg-red-500 rounded text-white px-8 py-2 lg:px-10 lg:py-2 md:px-10 md:py-2 sm:px-10 sm:py-2 m-36'>View All Products</button>
</div>

<div className='px-16'>
<div className='bg-red-600 w-5 h-10  rounded flex mb-2 '>
         <h2 className='ml-12 text-red-600 mt-1 font-bold'>Feautured</h2>
             </div> 
            <h2 className='text-2xl font-bold mb-2'>New Arrival</h2>
             
             <div className='flex flex-col justify-around md:flex gap-4  sm:flex-col lg:flex-row'>
              <div className='relative bg-black w-96 h-2/4'>

                <Image src={'/images/speakers.png'} alt='speakers' width={300} height={200} className='class="object-cover w-full h-full rounded-lg'/>
              
              <div className=' text-white absolute bottom-8 left-8 ' >
                <h1 className='text-2xl font-bold'>Play Station 5</h1>
                <p className='text-sm mb-2'>Black and white version of the PS5 <br/>
                coming out on sale</p>
                <a href='#' className='inline-block text-sm font-semibold text-white underline'>Shop Now</a>
              </div>
              </div>
              <div>
              <div className='flex  bg-neutral-950 w-full h-56  '>
                <div className=' text-white ml-6 mt-20 md:mt-10'>
                 <h1 className='text-2xl font-bold mb-2 lg:mt-12 md:mt-4'>Women&apos;s Collections</h1>
                 <p className='text-xs md:w-60 md:mt-8 sm:w-30 lg:w-60 lg:mt-6 lg:text-sm md:text-sm sm:text-sm '>Featured woman collections that<br/> gives you another vibe.</p>
                 <a href='#' className='inline-block text-xs lg:text-sm sm:text-sm md:text-sm font-semibold text-white underline mt-2 mb-4'>Shop Now</a>

                </div>
                <div className='md:w-full md:mt-4 lg:mt-4  mt-20 w-full sm:w-80 sm:mt-8'>
                   <Image src={'/images/attractive-woman.png'} alt='woman' width={300} height={300} className='object-cover'/>
                </div>
              </div> 
               <div className='flex gap-10 mt-3'>
                
              <div className='relative w-40'>

<Image src={'/images/Frame 707.png'} alt='speakers' width={200} height={100} className='class="object-cover  bg-zinc-950'/>

<div className=' text-white absolute bottom-8 left-8' >
<h1 className='text-2xl font-bold'>Speakers</h1>
<p className='text-sm mb-2'>Amazon wireless speakers </p>
<a href='#' className='inline-block text-sm font-semibold text-white underline'>Shop Now</a>
</div>
</div>

<div className='relative '>

<Image src={'/images/perfume.png'} alt='speakers' width={168} height={100} className=' bg-zinc-950'/>

<div className=' text-white absolute bottom-8 left-8' >
<h1 className='text-2xl font-bold'>Perfume</h1>
<p className='text-sm mb-2'>GUCCI INTENSE OUD EDP</p>
<a href='#' className='inline-block text-sm font-semibold text-white underline'>Shop Now</a>
</div>
</div> 
</div> 
</div>
            </div>  
            </div>

             <div className=' flex justify-evenly  items-center mt-12  '>
             <div className="relative w-10 h-10 rounded-full bg- flex items-center justify-center bg-neutral-400">
    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
      <div className="w-6 h-6 rounded-full text-white flex items-center justify-center">
      <RiCaravanLine />
     
      
      </div>  
    </div>
  
  </div>

  <div className="relative w-10 h-10 rounded-full bg-neutral-400 flex items-center justify-center">
    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
      <div className="w-6 h-6 rounded-full flex text-white items-center justify-center">
      <MdHeadsetMic />
     
    
      </div>
    </div>
  </div>

  <div className="relative w-10 h-10 rounded-full bg-neutral-400 flex items-center justify-center">
    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
      <div className="w-6 h-6 rounded-full flex justify-center items-center text-white">
      <BsShieldCheck />
  
      
      </div>
    </div>
  </div>
   
      </div>
      <div className='flex justify-evenly items-center text-center mt-4'>
           <div className=''>
      <h1 className='font-bold ml-12'>FREE AND FAST DELIVERY</h1>
      <p className='text-sm ml-16'>Free delivery for all orders over $140</p>
      </div> 

       <div>
      <h1 className='font-bold mr-16 text-black'>MONEY BACK GUARANTEE</h1>
      <p className='text-sm mr-16 '>We return money within 30days</p>
      </div> 
            <div>
      <h1 className='font-bold mr-14 '>24/7 CUSTOMER SERVICE</h1>
      <p className='text-sm mr-14'>Friendly 24/7 customer support</p>
      </div> 
      </div>
      <div className='bg-red-600 text-white w-10 rounded-full h-10 flex items-center justify-center'>
      <FaArrowUp className='flex ' />
      </div>
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

export default Home
