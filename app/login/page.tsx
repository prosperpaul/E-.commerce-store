import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mb-6 mt-12 ">
    
      <Image src={"/images/chart.png"} alt='image' width={400} height={100} className='hidden md:hidden sm:w-[90%]  sm:hidden lg:flex lg:w-[46rem]'/>  

      <div className='p-6 md:ml-20 md:mb-6 lg:m-32 sm:ml-8 sm:mb-8'>
        <h1 className='mb-6 text-4xl font-semibold lg:text-3xl  md:text-6xl md:mb-6 sm:text-6xl  sm:mb-6'>Log in to Exclusive</h1>
        <p className='mb-6 text-sm md:mb-4 md:text-xl sm:text-xl sm:mb-6 lg:text-sm'>Enter your details below</p>
        <input type='text' placeholder="Email or Phone Number" className='border-b-2 w-[20rem] mb-6 md:w-[30rem] sm:w-[32rem] lg:w-[20rem]'/>
        <br/>
        <input type='text' placeholder="Password" className='border-b-2 w-[20rem] mb-6 md:w-[30rem] sm:w-[32rem] lg:w-[20rem]'/>
        <div>
        <button className='px-4 bg-red-600 py-2 text-white rounded'>Log in </button>
        <a href='#' className='text-red-600 ml-24'>Forget Password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
