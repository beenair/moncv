import React from 'react'
import {CgBee} from 'react-icons/cg'


export default function MenuTop() {

  return(

    <div className="h-12 flex flex-row items-center">

      {/* Logo à gauche */}
      <div className="flex flex-none w-12 text-2xl text-yellow-600 place-content-center">
        <CgBee/>
      </div>

      {/* Titre */}
      <div className="flex-grow">
        MonCV
      </div>

      {/* Bouton burger menu */}
      <div className="flex-none text-yellow-600 w-12" id="burger-menu">
        <button className="flex items-center px-3 py-2 border rounded text-yellow-600 border-yellow-600 hover:text-yellow-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

    </div>

  );
}