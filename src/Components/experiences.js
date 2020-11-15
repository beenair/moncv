import React,{Component} from 'react';
import {TiArrowSortedDown} from 'react-icons/ti'

export default class Experiences extends Component{
  render(){

    return(

      <div className ="grid grid-rows-6 gap-8">

        {/* Entreprise */}
        <div className="h-24 bg-black w-4/6 m-auto relative z-0">
          <div className="h-20 mt-2 flex flex-row items-center rounded-l-full rounded-r-full bg-gray-600">
            {/* Dates */}
            <div classname="flex-initial">
              <div className="w-24 text-center">Dates</div>
            </div>
            {/* Titre */}
            <div className="flex-1">
              <div className=" ml-32">Titre</div>
            </div>
            {/* Fleche deroulement */}
            <div classname="flex-initial">
              <div className="w-16 text-4xl"><TiArrowSortedDown/></div>
            </div>
          </div>

          <div className="rounded-full h-24 w-24 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>

      </div>

    );
  }
}