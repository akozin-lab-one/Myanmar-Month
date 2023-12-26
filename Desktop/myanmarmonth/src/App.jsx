import React, { useEffect, useState } from 'react'
import { api } from './api/apiResource'
import Main from './components/Main'
import { Images } from './components/Images';
import { Route, Routes } from 'react-router';
import Month from './components/Month';

const App = () => {
    const [months, setMonths] = useState([]);
    const getMonths = async ()=>{
        const res = await api.get('/Tbl_Months')  
        // console.log(res.data);
        setMonths(res.data);
    } 

    useEffect(()=>{
        getMonths()
    },[]);

    return ( 
        <div>
            <Routes>
                <Route path='/' element={<Main months={months} Images={Images}/>}/>
                <Route path='/month/:id' element={<Month months={months}/>} />
            </Routes> 
        </div>
    )
}

export default App