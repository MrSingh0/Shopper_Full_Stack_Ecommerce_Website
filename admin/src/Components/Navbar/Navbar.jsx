import React from 'react'
import './Navbar.css'
import navlog from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () =>{
    return (
        <div className='navbar'>
            <img src={navlog} alt=""  className='nav-log'/>
            <img src={navProfile} className='nav-profile' alt="" />
        </div>
    )
}

export default Navbar