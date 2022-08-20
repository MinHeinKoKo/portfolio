import React from 'react'
import './Testimonial.css'
import AVATR1 from '../../assets/assets/avatar1.jpg'
import AVATR2 from '../../assets/assets/avatar2.jpg'
import AVATR3 from '../../assets/assets/avatar3.jpg'
import AVATR4 from '../../assets/assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div id='testimonial' className='testimonial container mt-3 text-center w-75 d-flex justify-content-center align-items-center flex-sm-column'>
      <div className="intro text-center p-5">
        <h6>My first Website</h6>
        <h2>Testimonial</h2>
      </div>
      <div className="row justify-content-center align-items-center w-t text-center">
        <Swiper className="swiper-css">
        <div className="col-xl-8 col-md-8 col-12 mt-5">
          <SwiperSlide className='testimonial-ar mt-5'>
            <div className="">
              <img src={AVATR1} alt=""  className='client-avatar'/>
            </div>
            <h5>Emma</h5>
              <small className='client-review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad doloremque sed, obcaecati facilis culpa laboriosam ratione est quia omnis, alias ipsam inventore amet in error tenetur architecto voluptates perferendis illo nesciunt. Blanditiis ab ut sed laboriosam harum eius aliquid corporis maiores, quis vero repellat, reiciendis amet, deleniti molestias.
              </small>
          </SwiperSlide>
        </div>
        <div className="col-xl-8 col-md-8 col-12 mt-5">
          <SwiperSlide className='testimonial-ar mt-5'>
            <div className="">
              <img src={AVATR2} alt=""  className='client-avatar'/>
            </div>
            <h5>Emma</h5>
              <small className='client-review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad doloremque sed, obcaecati facilis culpa laboriosam ratione est quia omnis, alias ipsam inventore amet in error tenetur architecto voluptates perferendis illo nesciunt. Blanditiis ab ut sed laboriosam harum eius aliquid corporis maiores, quis vero repellat, reiciendis amet, deleniti molestias.
              </small>
          </SwiperSlide>
        </div>
        <div className="col-xl-8 col-md-8 col-12 mt-5">
          <SwiperSlide className='testimonial-ar mt-5'>
            <div className="">
              <img src={AVATR3} alt=""  className='client-avatar'/>
            </div>
            <h5>Emma</h5>
              <small className='client-review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad doloremque sed, obcaecati facilis culpa laboriosam ratione est quia omnis, alias ipsam inventore amet in error tenetur architecto voluptates perferendis illo nesciunt. Blanditiis ab ut sed laboriosam harum eius aliquid corporis maiores, quis vero repellat, reiciendis amet, deleniti molestias.
              </small>
          </SwiperSlide>
        </div>
        <div className="col-xl-8 col-md-8 col-12 mt-5">
          <SwiperSlide className='testimonial-ar mt-5'>
            <div className="">
              <img src={AVATR4} alt=""  className='client-avatar'/>
            </div>
            <h5>Emma</h5>
              <small className='client-review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad doloremque sed, obcaecati facilis culpa laboriosam ratione est quia omnis, alias ipsam inventore amet in error tenetur architecto voluptates perferendis illo nesciunt. Blanditiis ab ut sed laboriosam harum eius aliquid corporis maiores, quis vero repellat, reiciendis amet, deleniti molestias.
              </small>
          </SwiperSlide>
        </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial