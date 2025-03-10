import React from 'react';


import './ExperienceCard.css'

export function ExperienceCard({ details }) {
  return (
  <div className='work-experience-card'>

    <h6>{details.title}</h6>

    <div className='work-duration'>{details.date}</div>

    <ul>
        {details.responsabilidade.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
  </div>
  );
}