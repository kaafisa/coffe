import React from 'react'
import cata1 from '../../assets/cata1.jpg'
import './catagories.css'
const Catagories = () => {
  return (
    <div className='cofee__catagories  ' id='catagories'>
        <div className="coffee__catagories-heading">
          <h1>Top Categories</h1>
        </div>
        <div className="cofee__cards">
          <div className="cofee__catagories-card">
            <h1 id='iced'>Caffe Mocha</h1>
            <div/>
            <p>View More</p>
          </div>

          <div className="cofee__catagories-card cat2">
            <h1 id='esspresso'>Espresso americano</h1>
            <div/>
            <p>View More</p>
          </div>

          <div className="cofee__catagories-card cat3">
            <h1 id='cappuccino'>Cappuccino</h1>
            <div/>
            <p>View More</p>
          </div>
        </div>
      
      
      
      </div>
  )
}

export default Catagories