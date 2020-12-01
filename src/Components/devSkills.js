import React from 'react'
import {FaReact, FaSymfony,FaHtml5,FaCss3Alt,FaBootstrap,FaPhp,FaJava,FaPython,FaGithub,FaWordpress} from 'react-icons/fa'
import {SiJquery,SiMysql,SiMariadb,SiOracle,SiMicrosoftaccess,SiTailwindcss,SiJavascript,SiCsharp} from 'react-icons/si'
import {DiGit} from 'react-icons/di'


export default function DevSkills(){
  
    return(

             
      <div className="grid grid-cols-2 gap-2 p-3">

        <div className="col-span-2 text-3xl font-light text-yellow-600 text-center bg-gray-700 rounded-lg">
          Développement
        </div>

        {/* Langages */}
        <div className="bg-gray-400 rounded-lg px-2 pb-2">
          <div className="text-xl font-baset mt-2">
            Langages :
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
        </div>
        


        {/* Intégration */}
        <div className="bg-gray-400 rounded-lg px-2 pb-2">
          <div className="text-xl font-baset mt-2">
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
        </div>


        {/* Bases de données */}
        <div className="bg-gray-400 rounded-lg px-2 pb-2">
          <div className="text-xl font-base mt-2">
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

        </div>


        {/* Librairies - Frameworks */}
        <div className="bg-gray-400 rounded-lg px-2 pb-2">
          <div className="text-xl font-baset mt-2">
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
        </div>



        {/* Versionning */}
        <div className="bg-gray-400 rounded-lg px-2 pb-2">
          <div className="text-xl font-baset mt-2">
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


      </div>

    );
  
}