import React from 'react';
import Background from '../img/bg.jpg'


export default function InfosProfil(props){
 
    return(

      <div className="h-auto w-full flex flex-col">

        {/* Nom et Titre */}
        <div className="h-auto w-full bg-bottom p-3" style={{ backgroundImage:`url(${Background})` }}>
          <div className="h-48 flex items-center place-content-center text-yellow-600 text-5xl font-bold">
            {props.prenom} {props.nom}
          </div>
          <div className="h-48 flex items-start place-content-center text-gray-200 text-4xl font-light">
            {props.titre}
          </div>
        </div>


        {/* Presentation et photo */}
        <div className="h-64 bg-red-500">

        </div>


      </div>

    );


}