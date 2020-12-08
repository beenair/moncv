import React from 'react';
import {GiDiploma} from 'react-icons/gi'


export default function Diplome(props){

  return(

    <div className="flex flex-col h-48 mt-6 text-center rounded-lg">
      {/* Titre */}
      <div className="h-16 flex items-center place-content-center font-semibold bg-gray-500 rounded-t-lg">
        {props.titre}
      </div>
      {/* Niveau */}
      <div className="flex-1 flex flex-row gap-2 items-center place-content-center bg-gray-400">
        <GiDiploma/>
        {props.niveau}
      </div>
      {/* Année */}
      <div className="flex-1 flex items-center place-content-center font-light bg-gray-400">
        {props.annee}
      </div>
      {/* Ecole */}
      <div className="flex-1 flex items-center place-content-center font-base bg-gray-400 rounded-b-lg">
        {props.ecole}
      </div>
    </div>
  )
}