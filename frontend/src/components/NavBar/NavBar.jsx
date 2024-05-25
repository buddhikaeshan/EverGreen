import React from 'react';
import './NavBar.css';
import { ShoppingCart } from "phosphor-react";
import { FaSearch } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const NavBar = ({ setShowLogin }) => {

    const { token, setToken } = useContext(MenuContext);

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("")
        navigate("/");
    }

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
                        <li><Link to='/cart'><a href="#" className='ShoppingCart'><ShoppingCart  size={32} /></a></Link></li>
                        {!token ? <li><a onClick={() => setShowLogin(true)} href="#">Sign In</a></li>
                            : <div className='navbar-profile'>
                                <img src={assets.profile_icon} className='profile-icon' alt="" />
                                <div className="drop">
                                    <ul className='nav-profile-dropdown'>
                                        <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                        <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Log Out</p></li>
                                    </ul>
                                </div>
                            </div>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar