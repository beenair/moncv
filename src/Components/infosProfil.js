import React from 'react';


export default function InfosProfil(props){
 

    return(

      <div className="h-full flex flex-col p-3">

        {/* A propos */}
        <div classname="flex-initial">
          <div className="text-yellow-600 text-3xl font-semibold">
            A propos de moi :
          </div>
          <div className="text-gray-500 text-xl font-light mt-4">
            {props.presentation}
          </div>
        </div>


      </div>

    );


}