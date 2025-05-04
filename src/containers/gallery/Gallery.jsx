import React from 'react'
import gallery1 from '../../assets/gallery1.jpg'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import cata1 from '../../assets/cata1.jpg'

import gal3 from '../../assets/gal3.jpg'
import cata2 from '../../assets/cata2.webp'
import './gallery.css'
const Gallery = () => {
  return (
    <div className='coffee__gallery '>
      <div className="coffee__gallery-groupA">
          <div className='image1'>
            <img src={gal1} alt="gallery-img" />
          </div>
          <div className='image2'>
            <img src={gal2} alt="gallery-img" />
          </div>
      </div>
      <div className="coffee__gallery-groupB">
        <img src={gallery1} alt="gallery-img" />
      </div>

      <div className="coffee__gallery-groupC">
          <div className='image1'>
            <img src={gal3} alt="gallery-img" />
            </div>
          <div className='image2'>
            <img src={cata2} alt="gallery-img" />
          </div>
      </div>
    </div>
  )
}

export default Gallery