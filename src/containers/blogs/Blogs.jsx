import React from 'react'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import { Blog } from '../../components'
import './blogs.css'
const BlogData= [
  {
    img:blog1,
    title:'The Standard Drinking Coffee',
  },
  {
    img:blog2,
    title:'consectator attractive',
  },
  {
    img:blog3,
    title:'Coffee late article'
  }
]

const Blogs = () => {
  return (
    <div className='coffee__blogs section__padding' id='blogs'>
      <h1>Latest Blogs</h1>
      <div className="coffee__blogs-container">
        {BlogData.map((item,index)=>(
          <Blog img={item.img} title={item.title} key={item.title+index}/>
        ))}
        
      </div>
    </div>
  )
}

export default Blogs