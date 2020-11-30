import React from 'react';
import Background from '../img/bg.jpg'
import Photo from '../img/photo.jpg'

import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'
import {MdPermContactCalendar} from 'react-icons/md'


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
        <div className="h-auto grid grid-cols-2 md:flex md:flex-row gap-3 p-3">
          {/* Photo */}
          <div className="w-1/3 border-8 border-gray-200">
            <img src={Photo} alt="moi"/>
          </div>
          {/* Presentation */}
          <div className="w-2/3 flex flex-col self-end">
            {/* Titre */}
            <div className="text-2xl font-semibold">
              A propos
            </div>
            {/* Texte présentation */}
            <div className="mt-3 text-xl font-ligth text-gray-700">
              {props.presentation}
            </div>
          </div>
        </div>



        {/* Infos utiles */}
        <div className="bg-gray-800 h-32 grid grid-cols-4 divide-x-2 divide-yellow-600 divide-opacity-75">
          <div className="flex flex-col gap-2 place-content-center place-items-center">
            {/* Adresse */}
            <div className="text-3xl text-yellow-600">
              <FaMapMarkerAlt/>
            </div>
            <div className="text-gray-500 text-base font-light text-center">
              {props.codepostale} <br/>
              {props.ville}
            </div>
          </div>
          {/* Mobilité */}
          <div className="flex flex-col gap-2 place-content-center place-items-center">
            <div className="text-3xl text-yellow-600">
              <AiFillCar/>
            </div>
            <div className="text-gray-500 text-base font-light text-center">
              {props.permis} <br/>
              {props.vehicule}
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-2 place-content-center place-items-center">
            <div className="text-3xl text-yellow-600">
              <MdPermContactCalendar/>
            </div>
            <div className="text-gray-500 text-base font-light text-center">
              {props.telephone} <br/>
              {props.mail}
            </div>
          </div>

          <div>

          </div>
        </div>


      </div>

    );


}