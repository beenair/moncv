import React from 'react'
import DevSkills from './devSkills'
import ItSkills from './itSkills'
// import SoftSkills from './softSkills'


export default function Skills(){

  

    return(
      
      <div className="grid grid-cols-2 mt-10">

        {/* Dev Skills */}
        <div className="">
          <DevSkills/>
        </div>

        {/* IT Skills */}
        <div className="">
          <ItSkills/>
        </div>

        {/* Soft Skills */}
        <div className="h-64 col-span-2 bg-green-600">
          
        </div>
        
      </div>


    );

}