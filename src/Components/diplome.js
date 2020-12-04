import React from 'react';


export default function Diplome(props){

  return(

    <div className="flex flex-col h-40 mt-6 text-center bg-gray-600 hover:bg-yellow-600 hover:text-gray-600">
      {/* Titre */}
      <div>
        {props.titre}
      </div>
      {/* Niveau */}
      <div>
        {props.niveau}
      </div>
      {/* Année */}
      <div>
        {props.annee}
      </div>
      {/* Ecole */}
      <div>
        {props.ecole}
      </div>
    </div>
  )
}