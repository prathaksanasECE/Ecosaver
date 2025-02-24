import React from 'react'
import { Link } from 'react-router-dom'
import './login_signup/Login.css'

function Pages({ data }) {
    return (
        <div>
            {
                data.length === 0
                    ? "No results Found"
                    : (<div className='PassingItems'>
                        {data.map((i, index) => (
                            <nav key={index}>
                               
                                <div className='Item'>
                                    <img src="" alt='products'></img>
                                    <h3>{i.Productname}</h3>
                                    <h2>{i.amount}</h2>
                                    <h2>{i.amount}</h2>
                                    <Link to={`/product/${i._id}`} className="ButtonNavigation">View Details</Link>
                                </div>
                            </nav>
                        ))}

                    </div>)
            }
        </div>
    )
}

export default Pages