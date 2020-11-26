import React from 'react';


export default function InfosGenerales(props){
 

    return(

      <div className="h-auto flex flex-col bg-green-500 px-6 pt-2">

        <div className="h-64 items-center flex flex-row bg-gray-800">
          <div className="flex-1 flex-col w-1/4">
            {/* Nom / Prenom */}
            <div className="text-3xl bg-blue-900">
            {props.prenom} {props.nom}
            </div>
            {/* Titre */}
            <div className="text-2xl font-semibold">
              {props.titre}
            </div>
          </div>
          {/* Présentation */}
          <div className="h-64 w-3/4 px-2 text-xl bg-orange-400">
            {props.presentation}
          </div>
        </div>

        {/* Barre noire */}
        <div className="w-3/4">
          <div className="h-40 grid grid-cols-4 gap-4 items-center bg-black">
            {/* Adresse / Naissance */}
            <div className="h-24 w-24 border border-gray-600 content-center">

            </div>
            {/* Permis - Mobilité */}
            <div className="h-24 w-24 border  border-gray-600 content-center">

            </div>
            {/* Adresse / Naissance */}
            <div className="h-24 w-24 border  border-gray-600 content-center">

            </div>
            {/* Adresse / Naissance */}
            <div className="h-24 w-24 border  border-gray-600 content-center">

            </div>
          </div>
        </div>

      </div>

    );


}