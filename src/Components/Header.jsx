import React from 'react';
import './Header.css';
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to='/'>
            <div className='Ptitle'>

                <h2>Pokedex Fetching using API.  Client application </h2>
            </div>
            </Link>
           <nav>
            <ul>
                <li> <NavLink to='/'>Home</NavLink>     </li>
                <li><NavLink to='/pokelist'> Pokedex List </NavLink></li>
                <li><NavLink to='/about'>About</NavLink> </li>
            </ul>
           </nav>
        </header>
    );
};

export default Header;