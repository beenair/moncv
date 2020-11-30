import React from 'react'
import {FaReact, FaSymfony,FaHtml5,FaCss3Alt,FaBootstrap,FaPhp,FaJava,FaPython,FaGithub,FaWordpress} from 'react-icons/fa'
import {SiJquery,SiMysql,SiMariadb,SiOracle,SiMicrosoftaccess,SiTailwindcss,SiJavascript,SiCsharp} from 'react-icons/si'
import {DiGit} from 'react-icons/di'


export default function DevSkills(){
  
    return(


      <div className="flex flex-col p-3">

        <div className="text-3xl font-bold text-yellow-600">
          Développement informatique
        </div>

        
          {/* Bases de données */}
          <div className="text-2xl font-base mt-4">
            Base de données :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <SiMysql/>
            <SiMariadb/>
            <SiOracle/>
            <SiMicrosoftaccess/>
          </div>


          {/* Intégration */}
          <div className="text-2xl font-baset mt-4">
            Intégration web :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <FaHtml5/>
            <FaCss3Alt/>
            <FaBootstrap/>
            <SiTailwindcss/>
            <FaWordpress/>
          </div>


          {/* Langages */}
          <div className="text-2xl font-baset mt-4">
            Langages de programamtion :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <FaPhp/>
            <SiJavascript/>
            <FaPython/>
            <SiCsharp/>
            <FaJava/>
          </div>


          {/* Librairies - Frameworks */}
          <div className="text-2xl font-baset mt-4">
            Librairies - Frameworks :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <FaReact/>
            <FaSymfony/>
            <SiJquery/>
          </div>



          {/* Versionning */}
          <div className="text-2xl font-baset mt-4">
            Versionning :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <DiGit/>
            <FaGithub/>
          </div>


      </div>

    );
  
}