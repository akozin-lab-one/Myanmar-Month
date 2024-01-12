import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import About from './About';
import Service from './Service';
import MyProject from './MyProject';
import Contact from './Contact';

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/myproject' element={<MyProject/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Pages