import React from 'react';

export default function SoftSkills() {


    return(

      <div className="grid grid-cols-2 md:grid md:grid-cols-4 px-3">
        {/* Titre */}
        <div className="col-span-4 text-3xl font-light text-yellow-600 text-center bg-gray-700 rounded-lg">
          "Soft Skills"
        </div>

        <div>Entraide</div>
        <div>Curiosité</div>
        <div>Ecoute</div>
        <div>Calme</div>

      </div>

    );
}