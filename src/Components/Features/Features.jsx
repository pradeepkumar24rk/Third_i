import React from 'react'
import './Features.css'
import {features} from '../../data'
import Footer from '../Footer/Footer'

const Features = () => {
  
  return (
  <>
    <div className='f'>
      <div className='title'>
        <span className='t1'>Tools to express your vision</span>
        <span className='t2'>Thirdi opens a new door for vision. A solid set of features that<br></br> 
        will help you create your best vision.</span>
      </div>

    <div className='Features'>
      <div className='f-cards'>
        {features.map(data=>(<div class="card" key={data.id}>
            <div class="card2">

              <div class='c1'>
                  <span><img className='imgs' src={data.img} alt="" srcset="" /></span>
              </div>

              <div className='c2'>
                <span className='sub-title'>{data.sub}</span>
                <span className='describe'>{data.des}</span>
              </div>

            </div>
        </div>))}
      </div>
    </div>
    </div>
    <Footer/>
  </>
  )
}

export default Features