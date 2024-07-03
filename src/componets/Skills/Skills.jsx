import React from 'react';

import "./Skills.css"
import {SKILLS} from "../../utils/data"
import {SkillsCard}  from "./SkillsCard/SkillsCard";

export function Skills() {
  return (
   <>
   <div className='skills_container'>
    <h5> Projetos Recentes</h5>
    <div className='skilss_content'>
       <div className='skills'>
        {SKILLS.map((item) => (
          <SkillsCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}/>
        ))}
       </div>
       <div className='skilss-info'></div>
    </div>
   </div>
   </>
  );
}