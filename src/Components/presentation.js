import React from 'react'


export default function Presentation(props) {


    return(

      <div>
        
        <div className="text-3xl">
          Présentation
        </div>


        <div>
          {props.presentation}
        </div>

      </div>

    );

}