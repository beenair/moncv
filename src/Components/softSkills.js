import React from 'react';
import {FaHandsHelping} from 'react-icons/fa'
import {MdHearing} from 'react-icons/md'


export default function SoftSkills() {


    return(

      <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-4 px-3 mb-4">
        {/* Titre */}
        <div className="my-4 col-span-4 text-3xl font-light text-yellow-600 text-center bg-gray-700 rounded-lg">
          "Soft Skills"
        </div>

        <div className="h-32 flex flex-col place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <FaHandsHelping/>
          </div>
          <div className="">
            Entraide
          </div>
        </div>

        <div>Curiosité</div>

        
        <div className="h-32 flex flex-col place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <MdHearing/>
          </div>
          <div className="">
            Ecoute
          </div>
        </div>


        <div>Calme</div>

      </div>

    );
}