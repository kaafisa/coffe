import React from 'react'
import './footer.css'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='coffee__footer section__padding'>
      <div className="coffee__footer-links">
       <div className='coffee__footer-links_info'>
            <h4>Contact info</h4>
            <p><span>Address:</span> km4,Mogadishu,Somalia</p>
            <p><span>Phone:</span> +252 000000</p>
            <p><span>fax:</span> 012-345-678</p>
            <p><span>Email:</span>mina@support.com</p>
            <div className='media'>
              <div className='facebook'><FaFacebookF className='icon' /></div>
              <div className='twitter'><FaTwitter className='icon'/></div>
              <div className='red'><FaYoutube className='icon'/></div>
              <div className='red'><FaGooglePlusG className='icon'/></div>
              <div className='red'><FaPinterestP className='icon'/></div>
            </div>
        </div>
        <div >
            <h4>information</h4>
            <p>about us</p>
            <p>delivery information</p>
            <p>privacy policy</p>
            <p>terms & conditions</p>
            <p>contact us</p>
        </div>
        <div >
            <h4>my account</h4>
            <p>my account</p>
            <p>order history</p>
            <p>wish list</p>
            <p>newsletter</p>
            <p>returns</p>
        </div>
        <div className='newsletter'>
            <h4>newsletter</h4>
            <p>subscribe to our newsletters now and stay up to 
              date with new collections and exclusive offers.
            </p>
            <input type="text" placeholder='Enter e-mail here...'/>
            <button type='button'>subscribe</button>
        </div>
      </div>
      <div className="coffee__footer-subfooter">
      <p>@2025 Mina. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer