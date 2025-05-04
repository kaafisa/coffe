import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import { HiMiniBars3 } from 'react-icons/hi2'
import './navbar.css'

const Menu= () =>(
  <>
      <p><a href="#home">Home</a></p>
      <p><a href="#offers">offers</a></p>
      <p><a href="#catagories">catagories</a></p>
      <p><a href="#products">products</a></p>
      <p><a href="#blogs">Bolgs</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)

  return (
    <div className='cofee__navbar' id='home'>
      <div className='cofee__navbar-container'>
          <div className="cofee__navbar-container_links">
          <Menu/>
          </div>

          <div className="cofee__navbar-container_search">
            <input type="text" placeholder='search...'/>
            <MdSearch className='search'/>
          </div>
      </div>

      <div className="coffee__navbar-menu">
        {toggleMenu 
          ?<LiaTimesSolid size={27} color='#fff' onClick={()=>setToggleMenu(false)}/>
          :<HiMiniBars3  size={27} color='#fff' onClick={()=>setToggleMenu(true)}/>
          }

          {toggleMenu && 
            (
             <div className="coffee__navbar-menu_links scale-up-center">
              <Menu/>
             </div>
            )
          }
      </div>
      
    </div>
  )
}

export default Navbar