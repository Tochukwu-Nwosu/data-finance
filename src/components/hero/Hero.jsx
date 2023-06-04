import Typed from 'react-typed'

const Hero = () => {
  return (
    <section className="text-white">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
        <p className='text-lightGreen font-bold uppercase p-2 sm:mt-6 md:mt-12'>Grow with data analytics</p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>Grow with data</h1>
        <div className='flex justify-center items-center'>
            <h2 className='text-xl sm:text-4xl font-bold md:text-5xl py-4'>Fast, flexible financing for</h2>
            <Typed 
                className='text-xl sm:text-4xl font-bold md:text-5xl pl-2 md:pl-4'
                strings={[ 'BTB', 'BTC', 'SASS' ]}
                typeSpeed={120}
                backSpeed={140}
                loop
            />
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className='bg-lightGreen w-[200px] rounded-md font-medium text-black my-6 py-3'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero
