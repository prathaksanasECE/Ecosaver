import React from 'react'
import {Link} from 'react-router-dom'
import './login_signup/Login.css'


function Display() {

    return (
        <div>
            <ol className='DisplayBox'>
                <Link to='/grouped?category=groceries'> 
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Groceries</nav>
                </Link>
                <Link to='/grouped?category=fashion'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Fashion</nav>
                </Link>
                <Link to='/grouped?category=makeup'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Makeup</nav>
                </Link>
                <Link to='/grouped?category=appliances'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Home Aplliances</nav>
                </Link>
                <Link to='/grouped?category=electronics'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Electronics</nav>
                </Link>
                <Link to='/grouped?category=discount'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q_W-RSn7fAP4Q1s9Nf8DYY79mvoFRebETw&s'></img>
                    <nav>Last Discount deal</nav>
                </Link>
            </ol>
        </div>
    )
}

export default Display