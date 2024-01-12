import React from 'react'

const Contact = () => {
  return (
    <div className="w-[85%] lg:h-[570px] md:h-[410px] mx-auto grid  lg:place-items-center md:place-items-center">
      <div>
      <h1 className="uppercase text-nowrap text-center my-4 font-extrabold text-3xl">
        Contact
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-2 md:grid-cols-2">
          <div className=''>
            <h3 className='text-center'>Send Your Info</h3>
            <form className='lg:mx-auto  w-56' action="">
              <div>
                <label className='block font-bold' htmlFor="name">Name</label>
                <input className='block w-56 rounded h-7' type="text" id='name'/>
              </div>
              <div>
                <label className='block font-bold' htmlFor="email">Email</label>
                <input className='block w-56 rounded h-7' type="text" id='email'/>
              </div>
              <div>
                <label className='block font-bold' htmlFor="letter">Text</label>
                <textarea className='block w-56 rounded' name="" id="letter" cols="30" rows="5"></textarea>
              </div>

              <div className='mt-2'>
                <button className='bg-black text-white px-3 rounded py-1' type="button">Send</button>
              </div>
            </form>
          </div>
          <div className=''>
              <h3 className='text-center text-xl'>Information</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem modi necessitatibus iusto fugit expedita.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem modi necessitatibus iusto fugit expedita.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem modi necessitatibus iusto fugit expedita.</p>

              <div>
              <i class="fa-brands fa-facebook text-blue-600 text-3xl me-4 cursor-pointer"></i>
              <i class="fa-brands fa-linkedin text-blue-600 text-3xl me-4 cursor-pointer"></i>
              <i class="fa-brands fa-instagram text-red-400 text-3xl me-4 cursor-pointer"></i>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact