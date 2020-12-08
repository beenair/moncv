import React from 'react';


export default function Loisir(props){

  return(

    <div className="flex flex-col text-center h-48 mt-6">
      {/* Catégorie */}
      <div className="h-16 flex items-center place-content-center font-semibold bg-gray-500 rounded-t-lg">
        {props.categorie}
      </div>
      {/* Description */}
      <div className="flex-1 flex items-center place-content-center font-light p-2 bg-gray-400 rounded-b-lg">
        {props.description}
      </div>
    </div>

  )
}