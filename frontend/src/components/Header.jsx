import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./Header.css"
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header({ search, setsearch, login }) {

  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate()


  //functions
  const toggleSidebar = () => {
    setSideBar(!sideBar);
  }
  const SearchText = (e) => {
    setsearch(e.target.value);
  }
  
  function SearchFunction(e) {
    e.preventDefault();
    const val = search;
    if (search)
      navigate(`/product?keyword=${val}`);
  }


  return (
    <>
      <nav className="SideBarSet">
        <div className='HeaderElement'>

          <ol>
            <li onClick={toggleSidebar} ><FontAwesomeIcon icon={faBars} style={{ color: "#7c9c93", padding:"8px 3px"}} /></li>
            <Link className="StoreName" to={"/"}>Eco Saver</Link>
            <li>Find best Items From Your Home</li>
            <li>
              <form className='search' onSubmit={SearchFunction}>
                <input className='searchBox' type='textbox' placeholder='Find something....' onChange={(e) => SearchText(e)} value={search}></input>
                <button >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                </button>

              </form>
            </li>
            {
              login ? <Link to={`/profile/${login}`} className='profile_Page'> <FontAwesomeIcon icon={faCircleUser} style={{ color: "#535a58", }} /> </Link> :

                <nav className='club'>
                  <Link to="/login" className='login'>Login /</Link>
                  <Link to="/signup" className='signup'>SignUp</Link>
                </nav>
            }
          </ol>
        </div>

        <div>{sideBar && <Sidebar login={login}/>}</div>
      </nav>
    </>
  )
}

export default Header