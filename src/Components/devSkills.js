import React, { Component } from 'react'
import {FaReact, FaSymfony,FaHtml5,FaCss3Alt,FaBootstrap,FaPhp,FaJava,FaPython,FaGithub,FaWordpress} from 'react-icons/fa'
import {SiJquery,SiMysql,SiMariadb,SiOracle,SiMicrosoftaccess,SiTailwindcss,SiJavascript,SiCsharp} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {IoIosArrowBack} from 'react-icons/io'


export default class DevSkills extends Component{
  render(){
    return(


      <div className="flex flex-row">

        <div className="bg-gray-800 p-2 ml-64 border-4 border-blue-800 rounded-2xl">

          <div className="text-3xl font-bold text-blue-600">
            Développement informatique
          </div>


          <div className="text-xl font-light text-blue-500 mt-4">
            <ul>
              <li>Une certaine aisance avec les bases de données</li>
              <li>Sensibilité à l'UX / UI</li>
              <li>Bases sur les différents langages de programmation</li>
              <li>Notions sur les librairies et frameworks (React / React Native / Symfony)</li>
              <li>Travail collaboratif / Versionning</li>
            </ul>
          </div>

        </div>

        
        
        <div className="flex flex-1 flex-col gap-2 h-auto py-4 items-end">

          <div className="flex flex-row flex-1 rounded-l-full items-center py-1 border-l border-t border-b border-blue-600 bg-gray-800 
                          transition duration-700 ease-in-out transform translate-x-64 hover:bg-gray-700 hover:translate-x-10">
            <div className="flex flex-row font-light text-xl text-gray-400">
              <div className="flex-initial text-2xl pt-1">
                <div className="w-6"><IoIosArrowBack/></div>
              </div>
              <div classname="flex-initial">
                <div className="w-32 text-right cursor-default">Données</div>
              </div>
            </div>
            <div className="ml-12 w-64 flex flex-row space-x-4 text-4xl text-gray-200">
              <div><SiMysql/></div>
              <div><SiMariadb/></div>
              <div><SiOracle/></div>
              <div><SiMicrosoftaccess/></div>
            </div>
          </div>

          <div className="flex flex-row flex-1 rounded-l-full items-center py-1 border-l border-t border-b border-blue-600 bg-gray-800 
                          transition duration-700 ease-in-out transform translate-x-64 hover:bg-gray-700 hover:translate-x-px">
            <div className="flex flex-row font-light text-xl text-gray-400">
              <div className="flex-initial text-2xl pt-1">
                <div className="w-6"><IoIosArrowBack/></div>
              </div>
              <div classname="flex-initial">
                <div className="w-32 text-right cursor-default">Intégration</div>
              </div>
            </div>
            <div className="ml-12 w-64 flex flex-row space-x-4 text-4xl text-gray-200">
              <div><FaHtml5/></div>
              <div><FaCss3Alt/></div>
              <div><FaBootstrap/></div>
              <div><SiTailwindcss/></div>
              <div><FaWordpress/></div>
            </div>
          </div>
          
          <div className="flex flex-row flex-1 rounded-l-full items-center py-1 border-l border-t border-b border-blue-600 bg-gray-800 
                          transition duration-700 ease-in-out transform translate-x-64 hover:bg-gray-700 hover:-translate-x-px">
            <div className="flex flex-row font-light text-xl text-gray-400">
              <div className="flex-initial text-2xl pt-1">
                <div className="w-6"><IoIosArrowBack/></div>
              </div>
              <div classname="flex-initial">
                <div className="w-32 text-right cursor-default">Langages</div>
              </div>
            </div>
            <div className="ml-12 w-64 flex flex-row space-x-4 text-4xl text-gray-200">
              <div><FaPhp/></div>
              <div><SiJavascript/></div>
              <div><FaJava/></div>
              <div><SiCsharp/></div>
              <div><FaPython/></div>
            </div>
          </div>
          
          <div className="flex flex-row flex-1 rounded-l-full items-center py-1 border-l border-t border-b border-blue-600 bg-gray-800 
                          transition duration-700 ease-in-out transform translate-x-64 hover:bg-gray-700 hover:translate-x-24">
            <div className="flex flex-row font-light text-xl text-gray-400">
              <div className="flex-initial text-2xl pt-1">
                <div className="w-6"><IoIosArrowBack/></div>
              </div>
              <div classname="flex-initial">
                <div className="w-32 text-right cursor-default">Librairies</div>
              </div>
            </div>
            <div className="ml-12 w-64 flex flex-row space-x-4 text-4xl text-gray-200">
              <div><FaReact/></div>
              <div><FaSymfony/></div>
              <div><SiJquery/></div>
            </div>
          </div>

          <div className="flex flex-row flex-1 rounded-l-full items-center py-1 border-l border-t border-b border-blue-600 bg-gray-800 
                          transition duration-700 ease-in-out transform translate-x-64 hover:bg-gray-700 hover:translate-x-32">
            <div className="flex flex-row font-light text-xl text-gray-400">
              <div className="flex-initial text-2xl pt-1">
                <div className="w-6"><IoIosArrowBack/></div>
              </div>
              <div classname="flex-initial">
                <div className="w-32 text-right cursor-default">Versionning</div>
              </div>
            </div>
            <div className="ml-12 w-64 flex flex-row space-x-4 text-4xl text-gray-200">
              <div><DiGit/></div>
              <div><FaGithub/></div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}