import React, { Component } from 'react'
import DevSkills from './devSkills'


export default class Skills extends Component {

  render(){

    return(
      
      <div className="">

        {/* Dev Skills */}
        <div className="h-auto">

          {/* Titre */}
          <div>
            Développement Informatique
          </div>

          {/* Skills */}
          <div>
            <DevSkills/>
          </div>

        </div>

        {/* IT Skills */}
        <div className="h-64">
          IT Skills
        </div>

        {/* Soft Skills */}
        <div className="col-span-2 h-64">
          Soft Skills
        </div>
        
      </div>


    );
  }
}