import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import drop from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'

const Navbar = () => {
  const navRef = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
          navRef.current.classList.add('navbar-dark')
      }else{
        navRef.current.classList.remove('navbar-dark')

      }
    })
  },[])
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} />
        <ul>
          <li>HOME</li>
          <li>TV SHOWS</li>
          <li>MOVIES</li>
          <li>NEW & POPULAR</li>
          <li>MY LIST</li>
          <li>BROWSE BY LANGUAGE</li></ul>
      </div>
      <div className='navbar-right'>
        <img src={search} alt='' className='icons' />
        <p>Children</p>
        <img src={bell} alt='' className='icons' />
        <div className='navbar-profile'>
          <img src={profile} alt='' className='profile' />
          <img src={drop} alt='' className='icons' />
          <div className='dropdown' >
            <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar