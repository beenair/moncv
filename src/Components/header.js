import React, { Component } from 'react';
import InfosGenerales from './infosGenerales'
import Presentation from './presentation';


export default class Header extends Component {
  render(){
    return(
      <div className="w-full flex flex-row bg-gray-800 h-64 max-w-screen-xl m-auto py-1">

        {/* Infos générales */}
        <div className="flex-1 px-2">
          <InfosGenerales/>
        </div>

        {/* Photo */}
        <div className="flex-initial bg-orange-400 p-1">
          <div className="rounded-full h-64 w-64 flex items-center justify-center border-2 border-white">
            PHOTO
          </div>
        </div>

        {/* Présentation */}
        <div className="flex-1 px-2">
          <Presentation/>
        </div>

      </div>
    );
  }
}