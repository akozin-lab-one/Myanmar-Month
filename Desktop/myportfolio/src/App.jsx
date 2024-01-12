import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Pages from './components/Pages';

const App = () => {
    return ( 
        <div>
            <Navbar/> 
            <Pages/>
        </div>
    )
}

export default App