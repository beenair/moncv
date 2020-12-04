import React from 'react'
import {HiUser} from 'react-icons/hi'
import {FaPenAlt} from 'react-icons/fa'
import {GoMortarBoard, GoCloudDownload} from 'react-icons/go'
import {GiSuitcase ,GiSoccerBall,GiMuscleUp} from 'react-icons/gi'
import {CgBee} from 'react-icons/cg'
import {Link} from 'react-scroll'

export default function MenuSidebar(){

  return(

    // Menu
    <div className="w-full h-full text-3xl text-yellow-600 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex place-content-center place-items-center">
        <CgBee/>
      </div>
      {/* Liens */}
      <div className="flex flex-1 flex-col gap-5 place-content-center place-items-center">
        <Link to="apropos" smooth={true} duration={1000}  className="transform duration-500 hover:scale-125"> <HiUser/> </Link>
        <Link to="skills" smooth={true} duration={1000} className="transform duration-500 hover:scale-125"> <GiMuscleUp/> </Link>
        <Link to="parcours" smooth={true} duration={1000} className="transform duration-500 hover:scale-125"> <GiSuitcase/> </Link>
        <Link to="formation" smooth={true} duration={1000} className="transform duration-500 hover:scale-125"> <GoMortarBoard/> </Link>
        <Link to="hobbies" smooth={true} duration={1000} className="transform duration-500 hover:scale-125"> <GiSoccerBall/> </Link>
        <Link to="contact" smooth={true} duration={1000} className="transform duration-500 hover:scale-125"> <FaPenAlt/> </Link>
      </div>
      {/* Download */}
      <div className="h-16 flex place-content-center place-items-center">
        <Link to="download" className="transform duration-500 hover:scale-125"> <GoCloudDownload/> </Link>
      </div>
    </div>

  );

}

