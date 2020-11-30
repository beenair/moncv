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
          <div className="text-xl font-base mt-4">
            Bases de données :
          </div>

          <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
            <div className="flex flex-row gap-3 items-center">
              <div><SiMysql/></div>
              <div className="text-base">MySQL</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiMariadb/></div>
              <div className="text-base">Maria DB</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiOracle/></div>
              <div className="text-base">Oracle</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiMicrosoftaccess/></div>
              <div className="text-base">Microsoft Access</div>
            </div>
            
          </div>


          {/* Intégration */}
          <div className="text-xl font-baset mt-4">
            Intégration web :
          </div>

          <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
            <div className="flex flex-row gap-3 items-center">
              <div><FaHtml5/></div>
              <div className="text-base">HTML</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaCss3Alt/></div>
              <div className="text-base">CSS</div>
            </div>
            
            <div className="flex flex-row gap-3 items-center">
              <div><FaBootstrap/></div>
              <div className="text-base">Bootstrap</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiTailwindcss/></div>
              <div className="text-base">Tailwind CSS</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaWordpress/></div>
              <div className="text-base">Wordpress</div>
            </div>

          </div>


          {/* Langages */}
          <div className="text-xl font-baset mt-4">
            Langages de programamtion :
          </div>

          <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
            <div className="flex flex-row gap-3 items-center">
              <div><FaPhp/></div>
              <div className="text-base">PHP</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiJavascript/></div>
              <div className="text-base">JavaScript</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaPython/></div>
              <div className="text-base">Python</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiCsharp/></div>
              <div className="text-base">C Sharp</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaJava/></div>
              <div className="text-base">JAVA</div>
            </div>
          </div>


          {/* Librairies - Frameworks */}
          <div className="text-xl font-baset mt-4">
            Librairies - Frameworks :
          </div>

          <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
            <div className="flex flex-row gap-3 items-center">
              <div><FaReact/></div>
              <div className="text-base">React Js / React Native</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaSymfony/></div>
              <div className="text-base">Symfony</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><SiJquery/></div>
              <div className="text-base">JQuery</div>
            </div>
          </div>



          {/* Versionning */}
          <div className="text-xl font-baset mt-4">
            Versionning :
          </div>

          <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
            <div className="flex flex-row gap-3 items-center">
              <div><DiGit/></div>
              <div className="text-base">Git</div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div><FaGithub/></div>
              <div className="text-base">GitHub</div>
            </div>
          </div>


      </div>

    );
  
}