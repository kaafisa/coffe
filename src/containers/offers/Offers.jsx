import React from 'react'
import { TbPlaneTilt } from 'react-icons/tb'
import { GiWallet } from 'react-icons/gi'
import { FaGift } from 'react-icons/fa'
import { SlEarphonesAlt } from 'react-icons/sl'
import './offers.css'

const Offers = () => {
  return (
    <div className='coffee__offers section__padding' id='offers'>
      <div className="coffee__offers-card">
        <TbPlaneTilt className='icon' />
        <div className="coffee__offers-card_content">
          <h3>FREE SHIPPING WORLDWIDE</h3>
          <p>On order over $150</p>
        </div>
      </div>
      
      <div className="coffee__offers-card">
        <GiWallet className='icon'/>
        <div className="coffee__offers-card_content">
          <h3>CASH ON DELIVERY</h3>
          <p>100% Money back guarantee</p>
        </div>
      </div>

      <div className="coffee__offers-card">
        <FaGift className='icon' />
        <div className="coffee__offers-card_content">
          <h3>SPECIAL GIFT CARD</h3>
          <p>Offer special bonuses with gift</p>
        </div>
      </div>

      <div className="coffee__offers-card">
        <SlEarphonesAlt className='icon' />
        <div className="coffee__offers-card_content">
          <h3>24/7 CUSTOMER SERVISE</h3>
          <p>Call us 24/7 at 252-616-899751</p>
        </div>
      </div>

    </div>
  )
}

export default Offers