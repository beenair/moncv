import React from 'react';


export default function Experience(props) {

  return(

    <section>

      {/* Exprerience */}
      <div className="h-24 w-full m-auto relative z-0 border-2">
        <div className="h-20 mt-2 flex flex-row items-center rounded-l-full rounded-r-full bg-gray-600">
          {/* Dates */}
          <div className="flex-initial">
            <div className="w-24 text-center text-base">
              {props.dateFin !== props.dateDebut ? <div>{props.dateFin}</div>  : null}
              {props.dateDebut}
            </div>
          </div>
          {/* Titre */}
          <div className="flex-1 px-2">
            <div className="ml-32 text-xl">
              {props.titre}
              </div>
          </div>
          {/* Fleche deroulement */}
          <div className="flex-initial">
            <div className="w-16 text-4xl cursor-pointer">
              
            </div>
          </div>
        </div>

        {/* Entreprise */}
        <div className="rounded-full h-24 w-24 z-10 absolute top-0 ml-32 text-yellow-600 flex items-center justify-center bg-gray-900">
          {props.entreprise}
        </div>

      </div>

    </section>

  );

}