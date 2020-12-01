import React from 'react'
import DevSkills from './devSkills'
import ItSkills from './itSkills'
import SoftSkills from './softSkills'


export default function Skills(){

  

    return(
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">

        {/* Dev Skills */}
        <div>
          <DevSkills/>
        </div>

        {/* IT Skills */}
        <div>
          <ItSkills/>
        </div>

        {/* Soft Skills */}
        <div className="md:col-span-2 mt-6">
          <SoftSkills/>
        </div>
        
      </div>


    );

}