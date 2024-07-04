import React from 'react';

import "./SkillsCard.css"


export function SkillsCard({title, isActive, onClick}) {
  return (
    <div
        className={`skills-card  ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
    >
        <div className='skill-icon'>
            <p>{title}</p>
        </div>
    </div>
  );
}

