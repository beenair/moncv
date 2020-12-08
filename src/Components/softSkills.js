import React from 'react';
import {FaHandsHelping, FaSmile} from 'react-icons/fa'
import {MdHearing} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'


export default function SoftSkills() {


    return(

      <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-4 px-3 mb-4">

        {/* Titre */}
        <div className="my-4 col-span-2 md:col-span-4 text-3xl font-light text-yellow-600 text-center bg-gray-700 rounded-lg">
          "Soft Skills"
        </div>

        <div className="h-32 flex flex-col gap-2 place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <FaHandsHelping/>
          </div>
          <div className="">
            Entraide
          </div>
        </div>

        <div className="h-32 flex flex-col gap-2 place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <AiFillEye/>
          </div>
          <div className="">
          Curiosité
          </div>
        </div>
        
        <div className="h-32 flex flex-col gap-2 place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <MdHearing/>
          </div>
          <div className="">
            Ecoute
          </div>
        </div>

        <div className="h-32 flex flex-col gap-2 place-content-center items-center text-yellow-600 bg-gray-700 rounded-lg
                      hover:bg-yellow-600 hover:text-gray-700">
          <div className="text-4xl">
            <FaSmile/>
          </div>
          <div className="">
          Bonne humeur
          </div>
        </div>

      </div>

    );
}