import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Sidebar({login}) {
    return (
        <>
            <ol className='sidebarComponent'>
                <Link to={`/profile/${login}`} > Profile </Link>
                <Link to={""} > Track Products</Link>
                <Link to={""} > Products</Link>
                <Link to={""} > Orders🚀</Link>
                <Link to={""} > Favorites</Link>
                <Link to={""} > Cart <FontAwesomeIcon icon={faCartShopping} bounce /></Link>
                <Link to={""} > Sale!!</Link>
                <Link to={""} > Sold products</Link>
            </ol>
        </>
    )
}

export default Sidebar;