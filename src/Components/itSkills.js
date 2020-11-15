import React, { Component } from 'react'
import {SiLogmein,SiTeamviewer,SiVmware,SiDocker,SiOpenvpn,SiCisco,SiAdobephotoshop,SiAdobeillustrator,SiIos} from 'react-icons/si'
import {DiWindows,DiLinux,DiApple,DiAndroid} from 'react-icons/di'
import {MdHeadsetMic} from 'react-icons/md'
import {FaWifi,FaNetworkWired} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'


export default class ItSkills extends Component{
  render(){
    return(

      <div className="flex flex-row bg-gray-900">

        <div className="flex flex-row">

          <div className="flex flex-1 flex-col gap-2 h-auto py-4 items-start">

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-2">
              <div className="mr-4 w-24 flex flex-row font-light text-xl text-gray-400">
                <div>Systèmes</div> 
                <div className="text-2xl pt-1 ml-1"><IoIosArrowForward/></div>
              </div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-200">
                <div><DiWindows/></div>
                <div><DiLinux/></div>
                <div><DiApple/></div>
                <div><SiIos/></div>
                <div><DiAndroid/></div>
              </div>
            </div>

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-12">
              <div className="mr-4 w-24 flex flex-row font-light text-xl text-gray-400">
                <div>Réseau</div>
                <div className="text-2xl pt-1 ml-1"><IoIosArrowForward/></div>
              </div>
              <div className="mr-12 w-64 flex flex-row space-x-reverse space-x-4 text-4xl text-gray-200">
                <div><FaWifi/></div>
                <div><SiOpenvpn/></div>
                <div><SiCisco/></div>
                <div><FaNetworkWired/></div>
              </div>
            </div>
            
            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-24">
              <div className="mr-4 w-24 flex flex-row font-light text-xl text-gray-400">
                <div>Support</div>
                <div className="text-2xl pt-1 ml-1"><IoIosArrowForward/></div>
              </div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-200">
                <div><SiLogmein/></div>
                <div><SiTeamviewer/></div>
                <div><MdHeadsetMic/></div>
              </div>
            </div>
            
            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-32">
              <div className="mr-4 w-24 flex flex-row font-light text-xl text-gray-400">
                <div>Adobe</div>
                <div className="text-2xl pt-1 ml-1"><IoIosArrowForward/></div>
              </div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-200">
                <div><SiAdobephotoshop/></div>
                <div><SiAdobeillustrator/></div>
              </div>
            </div>

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-32">
              <div className="mr-4 w-24 flex flex-row font-light text-xl text-gray-400">
                <div>Hosting</div>
                <div className="text-2xl pt-1 ml-1"><IoIosArrowForward/></div>
              </div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-200">
                <div><SiVmware/></div>
                <div><SiDocker/></div>
              </div>
            </div>

          </div>

        </div>



        <div className="bg-gray-800 p-2 mr-64 border-4 border-blue-800 rounded-2xl">

          <div className="text-3xl font-bold text-blue-600">
            Informatique et Réseau
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



      </div>

    );
  }
}