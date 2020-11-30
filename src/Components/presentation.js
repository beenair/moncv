import React from 'react'


export default function Presentation(props) {


    return(

      <div>
        {/* Titre */}
        <div className="text-3xl">
          A propos
        </div>

        {/* Texte présentation */}
        <div>
          {props.presentation}
        </div>

      </div>

    );

}