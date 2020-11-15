import React, { Component } from 'react'
import DevSkills from './devSkills'
import ItSkills from './itSkills'
import SoftSkills from './softSkills'


export default class Skills extends Component {

  render(){

    return(
      
      <div className="bg-gray-900 border-t border-gray-900 grid grid-cols gap-16">

        {/* Dev Skills */}
        <div className="">
          <DevSkills/>          
        </div>

        {/* IT Skills */}
        <div className="">
          <ItSkills/>
        </div>

        {/* Soft Skills */}
        <div className="">
          <SoftSkills/>
        </div>
        
      </div>


    );
  }
}