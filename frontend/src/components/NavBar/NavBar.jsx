import React from 'react';
import './NavBar.css';
import { ShoppingCart } from "phosphor-react";
import { FaSearch } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to='/'><img src={assets.logo} alt="Logo" /></Link>
                </div>
                <form className='navbar-form'>
                    <div className="form-group">
                        <div className="search-bar">
                            <input className='form-control' type="text" placeholder="Search..." size={80} />
                            <button><FaSearch /></button>
                        </div>
                    </div>
                </form>
                <div className="nav-links">
                    <ul>
                        <li><Link to='/cart'><a href="#"><ShoppingCart size={32} /></a></Link></li>
                        <li><a onClick={()=>setShowLogin(true)} href="#">Sign In</a></li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar