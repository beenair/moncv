import React, { Component } from 'react'
import {FaReact, FaSymfony,FaHtml5,FaCss3Alt,FaBootstrap,FaPhp,FaJava,FaPython,FaGithub} from 'react-icons/fa'
import {SiJquery,SiMysql,SiMariadb,SiOracle,SiMicrosoftaccess,SiTailwindcss,SiJavascript,SiCsharp} from 'react-icons/si'
import {DiGit,} from 'react-icons/di'


export default class Skills extends Component {

  render(){

    return(
      
      <div className="grid grid-cols-2">

        {/* Dev Skills */}
        <div className="h-64">

          {/* Titre */}
          <div>
            Développement Informatique
          </div>

          {/* SQL */}
          <div>
            <SiMysql/>
            <SiMariadb/>
            <SiOracle/>
            <SiMicrosoftaccess/>
          </div>

          {/* HTML / CSS */}
          <div>
            <FaHtml5/>
            <FaCss3Alt/>
            <FaBootstrap/>
            <SiTailwindcss/>
          </div>

          
          {/* Langages */}
          <div>
            <FaPhp/>
            <SiJavascript/>
            <FaJava/>
            <SiCsharp/>
            <FaPython/>
          </div>

          {/* Librairies */}
          <div>
            <FaReact/>
            <FaSymfony/>
            <SiJquery/>
          </div>

          {/* Git */}
          <div>
            <DiGit/>
            <FaGithub/>
          </div>

        </div>

        {/* IT Skills */}
        <div className="h-64">
          IT Skills
        </div>

        {/* Soft Skills */}
        <div className="col-span-2 h-64">
          Soft Skills
        </div>
        
      </div>


    );
  }
}