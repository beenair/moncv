import React from 'react';


export default function Loisir(props){

  return(

    <div className="flex flex-col h-auto mt-6 text-center bg-gray-600 hover:bg-yellow-600 hover:text-gray-600">
      {/* Catégorie */}
      <div>
        {props.categorie}
      </div>
      {/* Description */}
      <div>
        {props.description}
      </div>
    </div>

  )
}