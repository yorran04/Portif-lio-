import React, { useState } from 'react';

import "./Skills.css"

import {SKILLS} from "../../utils/data"

import {SkillsCard}  from "./SkillsCard/SkillsCard";
import { SkillsInfoCard } from './SkillsInfoCard/SkillsInfoCard';

export function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) =>{
    setSelectedSkill(data)
    
  }

  return (
   <>
   <div className='skills_container'>
    <h5> Habilidades</h5>
    <div className='skills_content'>
       <div className='skills'>
        {SKILLS.map((item) => (
          <SkillsCard
            key={item.title}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={() => {handleSelectSkill(item)}}/>
            
        ))}
       </div>
       <div className='skilss-info'>
        <SkillsInfoCard
        heading={selectedSkill.title}
        skills={selectedSkill.skills}/>
       </div>
    </div>
   </div>
   </>
  );
}