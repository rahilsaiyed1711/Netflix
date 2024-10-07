import React from 'react'
import './Footer.css'
import yt from '../../assets/youtube_icon.png'
import tw from '../../assets/twitter_icon.png'
import ins from '../../assets/instagram_icon.png'
import fb from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

    <div className='footer-icons'>
      <img className='' src={yt}/>
      <img className='' src={tw}/>
      <img className='' src={ins}/>
      <img className='' src={fb}/>

    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms Of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookies Preference</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className='copyright'>2024 WebFlix , Inc. </p>
    </div>
  )
}

export default Footer