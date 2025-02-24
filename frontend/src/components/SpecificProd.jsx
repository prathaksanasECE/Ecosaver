import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './login_signup/Login.css'

function SpecificProd() {
  const [Data, setData] = useState([])
  const params = useParams();

  useEffect(() => {
    const func = async () => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_API_KEY}/product/${params.id}`)
        setData(result.data)
      }
      catch (err) {
        console.log("data Not found")
      }
    }
    func()
  }, [params.id]);

  return (
    <div className='specific_prod'>
      <div>
        
      </div>
      <h1>{Data.Productname}</h1>
      <h3>{Data.amount}</h3>
      <h3>{Data.Stock}</h3>
      <h3>{Data.ExpiryDate}</h3>
      <h3>{Data.Description}</h3>
    </div>
  )
}

export default SpecificProd