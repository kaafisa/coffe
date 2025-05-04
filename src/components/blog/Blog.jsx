import React from 'react'
import './blog.css'
const Blog = ({img, title}) => {
  return (
      <div className="coffee__blog-card">
          <div className='coffee__blog-card_img'> 
              <img src={img} alt="blog img" />
          </div>
          <div className='coffee__blog-card_content'>
              <h2>{title}</h2>
              <p className='little'>04 August 2024</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nobis, eaque sit? Dolores quaerat sequi odio assumenda, 
                architecto animi dolorem repellat adipisci asperiores velit. 
                Nulla tempora iusto dolorum dicta praesentium provident.
              </p>
          </div>
          <button type='button'>READ MORE</button>
        </div>
  
  )
}

export default Blog