import React from 'react'

const Home = () => {
  return (

        <div className='w-[85%] lg:h-[570px] md:h-[410px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 lg:place-items-center md:place-items-center'>
            <div className='w-[420px]  border-s-2 ps-2 border-black'>
                <h1 className='uppercase font-extrabold px-px text-6xl '>hello</h1>
                <h3 className="my-1 text-black">My name is </h3>
                <h2 className='uppercase w-[420px]  font-extrabold my-3 text-6xl'>Aung Ko Zin</h2>
                <div className="flex">
                <h3 className="text-black">I'm </h3>
                <h1 className='uppercase font-extrabold ms-3 text-4xl'>Web Developer</h1>
                </div>

                <p className='bg-black w-24  cursor-pointer text-xs text-decoration-none text-center py-2 text-white rounded-md mt-5' href="#">
                    My CV Form
                </p>
            </div>
            <div className=''>
                <img className="rounded-full w-[270px] h-[270px] border-black hover:scale-105 hover:duration-100 hover:drop-shadow-sm cursor-pointer border-2" src="https://shorturl.at/GRX57" alt="" />
            </div>
        </div>

  )
}

export default Home