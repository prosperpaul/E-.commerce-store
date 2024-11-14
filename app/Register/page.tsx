import Image from 'next/image'

const Register = () => {
  return (
    <div className='mb-6 lg:flex flex-row' >
      <Image src={'/images/chart.png'} alt='image' width={400} height={300} className='hidden lg:flex lg:w-[40rem] lg:mt-10'/>
      <div className='p-24 '>
        <h1 className='text-3xl mb-2 lg:text-3xl font-semibold lg:mb-2 sm:text-6xl '>Create an account</h1>
        <p className='  lg:text-sm mb-6 sm:text-xl'>Enter your details below</p>
        <input type='text' placeholder='Name'  className='mb-6 border-b-2 w-[20rem] sm:w-[30rem]'/> <br/>
        <input type='text' placeholder='Email or Phone Number' className='mb-6  border-b-2 w-[20rem] sm:w-[30rem]' /> <br/>
        <input type='text' placeholder='Password'  className='mb-6  border-b-2 w-[20rem] sm:w-[30rem]'/><br/> 
        
        <button className='bg-red-600 py-3 px-16 lg:py-2 lg:px-28 rounded  text-center text-white mb-6 sm:w-[30rem]'>Create Account</button> 
        <button className='flex gap-2 py-2 px-6 lg:px-20 border mb-6 sm:w-[30rem] md:flex justify-center items-center'><Image src={'/images/google.png'} alt='google' width={20} height={20} className='m-1  ' /> Sign up with Google</button>
        <div className='flex gap-4 ml-4 lg:ml-30 text-sm md:ml-36'>
        <p >Already have Account?</p>
        <a href='#' >Log in</a>
        </div>
        </div>
      </div>
  
  )
}

export default Register

