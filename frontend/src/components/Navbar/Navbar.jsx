import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import {HashLink} from 'react-router-hash-link'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu");
    const {getTotalCartAmount,token,setToken,setCartItems} = useContext(StoreContext);

    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem("token")
        setToken("")
        setCartItems("")
        navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <HashLink to='/#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</HashLink>

            <HashLink to='/#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</HashLink>
            <HashLink to='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</HashLink>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={!getTotalCartAmount()?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Log Out</p></li>
                </ul>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar
