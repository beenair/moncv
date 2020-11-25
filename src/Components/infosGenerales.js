import React from 'react';


export default function InfosGenerales(props){
 

    return(

      <div className="text-right">

        {/* Nom, Prenom */}
        <div className="text-3xl">
          {props.nom} {props.prenom}
        </div>

        {/* Date de naissance */}
        <div>
          {props.datenaissance}
        </div>

        {/* Telephone */}
        <div>
          {props.telephone}
        </div>

        {/* Mail */}
        <div>
          {props.mail}
        </div>

      </div>

    );


}