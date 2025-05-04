import React from 'react'
import { SlEarphonesAlt } from 'react-icons/sl';
import { RiShoppingBasketLine } from "react-icons/ri";
import { GiCoffeeBeans } from 'react-icons/gi';
import { LuUser2 } from 'react-icons/lu';
import './navone.css'



const Navone = () => {
  return (
    <div className='cofee__navone'>
      <div className="cofee__navone-support">
         <SlEarphonesAlt size={25} color='#000'/>
          <div className="cofee__navone-support_content">
            <p>Customer Support</p>
            <p>+1 99886600</p>
          </div>
      </div>

      <div className="cofee__navone-logo">
        <GiCoffeeBeans size={27} color='#d17008'/>
        <h1>MINA COFFEE</h1>
      </div>

      <div className="cofee__navone-cart">
        <LuUser2  className='icon'/>
        <div/>
        <RiShoppingBasketLine className='icon'/>
        <p>Shopping Cart <br />(0 items)</p>
      </div>
    </div>
  )
}

export default Navone