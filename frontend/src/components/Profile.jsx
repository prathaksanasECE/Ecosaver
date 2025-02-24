import { React, useEffect, useState } from 'react';
import { Link, useAsyncValue, useParams } from 'react-router-dom'
import axios from 'axios';
import "./Profile.css"

function profile({ login }) {
    const params = useParams();

    //fetching data
    const [data, setData] = useState([]);
    const [product,setProduct]=useState([]);

    //Content-Display
    const [account, setAccount] = useState(true);
    const [pending, setPending] = useState(false);
    const [setting, setSetting] = useState(false);


    useEffect(() => {
        const fetch = async () => {
            try {
                const value = await axios.get(`http://localhost:3000/profile/${params.id}`);
                setData(value.data);

                if(data.orders){
                    data.orders.filter(i=>!i.deliveryStatus).map((i,index)=>{
                        getProduct(i._id);
                    })
                }
            }
            catch (err) {
                console.log(err);
            }
            
        }
        
        fetch();
    }, [])

    const  getProduct = async (id)=>{
        console.log("Inside")
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        
        if (response.data) {
            setProduct(prev => ({ ...prev, [id]: response.data.Productname })); 
        } else {
            setProduct(prev => ({ ...prev, [id]: "Out of Stock" }));
        }
    }

    function logOut(e) {
        e.preventDefault();
        login("");
    }

    return (
        <>
           {/* {console.log(data)} */}
            <ol className='items'>
                <Link to={"/grouped?category=vegetables"} > 🥑 </Link>
                <Link to={"/grouped?category=fruits"} > 🍉 </Link>
                <Link to={"/grouped?category=snaks"} > 🍪 </Link>
                <Link to={"/grouped?category=electronics"} > 📺 </Link>
                <Link to={"/grouped?category=women"} > 👗 </Link>
                <Link to={"/grouped?category=men"} > 👕 </Link>
                <Link to={"/grouped?category=kitchen"} > 🍳 </Link>
            </ol>
            <div className='HoldingConatainer'>
                <div>

                    <nav className='Photo'>
                        <img src="" alt="" />
                    </nav>
                    <ol className='SidePanel'>

                        <li onClick={() => { setAccount(true); setSetting(false); setPending(false); }}> Account details</li>
                        <li > Change Password </li>
                        <li onClick={() => { setPending(true); setSetting(false); setAccount(false) }}> Pending Orders </li>
                        <li onClick={() => { setSetting(true); setAccount(false); setPending(false); }}> Settings </li>
                    </ol>

                </div>
                <div className='mainBar'>

                    {account &&
                        <ol className='details'>
                            <li>Name : {data.name} </li>
                            <li>E-mail : {data.email} </li>
                            <li>Phone Number : {data.phone} </li>
                            <li>Logined As : {data.role} </li>
                            {data.orders && data.orders.length > 0 &&
                                <li>
                                    {
                                        data.orders.map((i, index) => {
                                            <>
                                                <li key={i._id}> {product} </li>
                                                <li key={i._id}>{i.count}</li>
                                            </>
                                        })
                                    }
                                </li>
                            }

                            {
                                data.UPI_Number &&
                                <li>UPI : {data.UPI_Number} </li>
                            }


                            {
                                data.Location &&
                                <li>Location : {data.Location}</li>
                            }

                            {
                                data.Account_Number
                                && <li> Account Number : {data.Account_Number}</li>
                            }
                        </ol>
                    }

                    {
                        pending ?
                         data.orders?
                            <ol>
                                {(data.orders.filter(i => !i.deliveryStatus)).map((i, index) => (
                                <>

                                    <li key={index}>Product: {getProduct(i._id)}</li>
                                    <li key={index}> </li>
                                </>
                                ))}
                            </ol>
                            : "No Pending Products" :<></>


                    }

                    {
                        setting &&
                        <ol>

                            <Link onClick={logOut}>Logout</Link>
                        </ol>
                    }
                </div>
                <div>
                    <ol>
                        <Link to={""} >Rewards</Link>
                        <Link to={""} >Wallet</Link>
                        <Link  >Track Orders</Link>
                    </ol>
                </div>
            </div>
        </>
    )
}
export default profile;