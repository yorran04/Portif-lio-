import React, { useRef } from 'react';

import './WorkExperience.css'
import {WORK_EXPERIENCE} from '../../utils/data'
import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

export function WorkExperience() {

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
      ]
  }

  const slideRight = () =>{
    sliderRef.current.slickNext();
  };

  const slideLeft = () =>{
    sliderRef.current.slickPrev();
  }

  return (
    <section className='workExperience-container'>
        <h5>Work Experience</h5>

        <div className='workExperience-content'>

          <div className='arrow-right' onClick={slideRight}>
            <span> 	&rsaquo; </span>
          </div>
          <div className='arrow-left' onClick={slideLeft}>
            <span> &lsaquo; </span>
          </div>

          <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item}/>
          ))}
          </Slider>


        </div>
    </section>
  );
}