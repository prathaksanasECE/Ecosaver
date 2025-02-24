import React, { useEffect, useState } from 'react'
import Pages from './Pages';
import axios from 'axios'

function Home() {
    //home page Fetch
    const [HomePagedata, setHomePagedata] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_KEY}/product`)
        // 'http://localhost:3000/product'
        .then(result => {
            setHomePagedata(result.data.product)
            })
    }, [])


    return (
        <>
            <Pages data={HomePagedata} />
        </>
    )
}

export default Home;