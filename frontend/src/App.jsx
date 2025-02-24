import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Display from './components/Display'
import Home from './components/Home'
import Login from './components/login_signup/Login'
import Signup from './components/login_signup/Signup'
import SpecificProd from './components/SpecificProd'
import SearchPage from './components/SearchPage'
import Grouped from './components/Grouped'
import Profile from './components/Profile';

function App() {

  const [search, setsearch] = useState("");
  const [login, setlogin] = useState(() => {
    return sessionStorage.getItem("key") || "";
  });

  useEffect(() => {
    sessionStorage.setItem("key", login);
  }, [login])

  return (
    <>
      <Router>
        <Header search={search} setsearch={setsearch} login={login} />
        <Routes>
          <Route path="/" element={<div> <Display /> <Home /></div>} />
          <Route path="/product" element={<div> <SearchPage search={search} /></div>} />
          <Route path="/product?keyword=" element={<div> <SearchPage /></div>} />
          <Route path='/product/:id' element={<SpecificProd />} />
          <Route path='/login' element={<Login login={setlogin} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/grouped" element={<><Grouped /> </>}></Route>
          <Route path='/profile/:id' element={<><Profile login={setlogin}/></>}></Route>
          
        </Routes>
      </Router>

    </>
  )
}

export default App
