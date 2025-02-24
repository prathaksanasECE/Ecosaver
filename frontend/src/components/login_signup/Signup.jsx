import { useState } from 'react'
import axios from 'axios';
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'

function Signup() {

    //navigate
    const navigation = useNavigate();

    const isValidEmail = (email) => {
        if (!email) return true;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        return regex.test(email);
    };

    //useStates
    const [error, setError] = useState();
    const [data, setdata] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        verifyPassword: '',
        role: ''

    })
    const [verify, setVerify] = useState(true);


    function CollectData(e) {
        e.preventDefault();
        setVerify(data.password == data.verifyPassword)
        if (data.password == data.verifyPassword) {

            axios.post("http://localhost:3000/accountDetails", {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password,
                verifyPassword: data.verifyPassword,
                role: data.role
            })
                .then((res) => {
                    if (res.data === "Already Existss") {
                        setError(res.data);
                    }
                    else {
                        console.log(res);
                        console.log("SignUp successfull");
                        alert("SignUp Done!!! Enjoy shopping......")
                        navigation('/login');
                    }
                })
                .catch((err) => {
                    console.log("Something happened" + err);
                })
        }
    }

    return (
        <>
            <h1>SignUp</h1>
            <div className=' Signbox'>
                <form className='SignSeller' onSubmit={CollectData} type='submit'>

                    <div className='inputlabel'>
                        <label> Name</label>
                        <input type='text' placeholder='Enter Your Name🥰.....' value={data.name} name='name' onChange={(e) => { setdata({ ...data, name: e.target.value }); setError("") }} />
                    </div>

                    <div className='inputlabel'>
                        <label> E-mail Address</label>
                        <input type='email' placeholder='XYZ@gamil.com' value={data.email} name='email' onChange={(e) => { setdata({ ...data, email: e.target.value }); setError("") }} required />
                    </div>
                    {!isValidEmail(data.email) && <p>Invalid Mail Id</p>}

                    <div className='inputlabel'>
                        <label> Phone Number</label>
                        <input type='phone' value={data.phone} name='phone' onChange={(e) => { setdata({ ...data, phone: e.target.value }); setError("") }} required />
                    </div>
                    {data.phone.length != 10 && <p>Not a valid number</p>}

                    <div className='inputlabel'>
                        <label> Password</label>
                        <input type='password' value={data.password} name='password' onChange={(e) => { setdata({ ...data, password: e.target.value }); setError("") }} autoComplete="new-password" />
                    </div>
                    {!verify && <p className='error' >Passwords doesn't Match</p>}
                    <div className='inputlabel'>
                        <label> Verify Password</label>
                        <input type='password' autoComplete="new-password" name='verifyPassword' value={data.verifyPassword} onChange={(e) => { setdata({ ...data, verifyPassword: e.target.value }); setError("") }} ></input>
                    </div>

                    <div className='radio_buttons'>
                        <nav>
                            <label>Buyer</label>
                            <input type='radio' id="buyer" name="role" value="buyer" checked={data.role === "buyer"} onChange={(e) => { setdata({ ...data, role: e.target.value }); setError("") }} />
                        </nav>
                        <nav>
                            <label>Seller</label>
                            <input type='radio' id="Seller" name="role" value="seller" checked={data.role === "seller"} onChange={(e) => { setdata({ ...data, role: e.target.value }); setError("") }} />
                        </nav>
                    </div>
                    <p>{error}</p>
                    <button type='submit'> Submit </button>
                </form >
            </div>
        </>
    )
}

export default Signup