import React from 'react'
import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro5 from '../../assets/pro5.png'
import pro4 from '../../assets/pro4.png'
import './products.css'
import { Product } from '../../components'

const ProData= [
 {  
    disC:'-10%',
    img:pro1,
    title:'Irish Coffee',
    price:'$110.00',
    exP: '$122.00'

  },
 {
    disC:'-20%',
    img:pro2,
    title:'Clypso Coffee',
    price:'$482.00',
    exP: '$602.00'

  },
  {
    disC:'-13%',
    img:pro4,
    title:'Australian coffee',
    price:'$86.00',
    exP: '$98.00'

  },
  {
    disC:'-20%',
    img:pro2,
    title:'Kuwait coffee',
    price:'$98.00',
    exP: '$122.00'

  },
]
const Products = () => {
  return (
    <div className='coffee__products' id='products'>
      
      <div className="coffee__product-heading">
          <h1>Top Products</h1>
          <div className='product__heading-links'>
            <p className='Cspecial'>Featured</p>
            <p>Latest</p>
            <p>Bestseller</p>
          </div>
      </div>
      
      <div className="coffee__products-container">
        {ProData.map((item,index)=>(
          <Product image={item.img} title={item.title} price={item.price} disC={item.disC} exP={item.exP} index={item.title+index}/>
        ))}
        
      </div>
      
      </div>
  )
}

export default Products