import { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css'



function Login({login}) {

    const [data,setdata]=useState({
        email:'',
        password:'',
        role:''
    })
    const [error,seterror]=useState();

    const navigate=useNavigate();
    function handleSubmit(event){

        event.preventDefault();
        axios.post("http://localhost:3000/Login",{
            email:data.email,
            password:data.password,
            role:data.role
        })
        .then((res)=>{

            if(res.data.message==="Done"){
               login(res.data.user_id);
               navigate('/');
            }
            else {
                seterror(res.data.message)
            }
        })
    }

    return (
        <>
            <h1>Login</h1>
            <div className=' Signbox'>
                <form className='SignSeller' type='submit' onSubmit={handleSubmit}>

                    <div className='inputlabel'>
                        <label> E-mail Address</label>
                        <input type='email' placeholder='XYZ@gmail.com' value={data.email} name='email' onChange={(e) => setdata({ ...data, email: e.target.value })} required />
                    </div>
                    
                    <div className='inputlabel'>
                        <label> Password</label>
                        <input type='password' value={data.password} name='password' onChange={(e) => setdata({ ...data, password: e.target.value })} autoComplete="new-password" />
                    </div>

                    <div className='radio_buttons'>
                        <nav>
                            <label>Buyer</label>
                            <input type='radio' id="buyer" name="role" value="buyer" checked={data.role === "buyer"} onChange={(e) => setdata({ ...data, role: e.target.value })} />
                        </nav>
                        <nav>
                            <label>Seller</label>
                            <input type='radio' id="Seller" name="role" value="seller" checked={data.role === "seller"} onChange={(e) => setdata({ ...data, role: e.target.value })} />
                        </nav>
                    </div>

                    <p style={{color:"red"}}>{error}</p>
                    <button> Submit </button>
                </form >
            </div>
        </>
    )
}

export default Login