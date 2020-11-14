import React, { Component } from 'react'
import {SiLogmein,SiTeamviewer,SiVmware,SiDocker,SiOpenvpn,SiCisco,SiAdobephotoshop,SiAdobeillustrator} from 'react-icons/si'
import {DiWindows,DiLinux,DiApple} from 'react-icons/di'
import {MdHeadsetMic} from 'react-icons/md'
import {FaWifi,FaNetworkWired} from 'react-icons/fa'


export default class ItSkills extends Component{
  render(){
    return(

      <div className="flex flex-row bg-gray-900">

          <div className="w-3/5 bg-gray-900 relative">

            <div className="w-2/3 bg-gray-800 p-2 border-4 border-blue-800 rounded-2xl z-10 absolute top-0 right-0">

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




        <div className="flex flex-row z-0 relative">

          <div className="flex flex-1 flex-col gap-2 h-auto py-4 items-start">

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-r border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-24">
              <div className="mr-4 w-24 font-light text-xl text-gray-600">Systèmes</div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-500">
                <div><DiWindows/></div>
                <div><DiLinux/></div>
                <div><DiApple/></div>
              </div>
            </div>

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-l border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-12">
              <div className="mr-4 w-24 font-light text-xl text-gray-600">Réseau</div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-500">
                <div><FaWifi/></div>
                <div><SiOpenvpn/></div>
                <div><SiCisco/></div>
                <div><FaNetworkWired/></div>
              </div>
            </div>
            
            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-l border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-24">
              <div className="mr-4 w-24 font-light text-xl text-gray-600">Support</div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-500">
                <div><SiLogmein/></div>
                <div><SiTeamviewer/></div>
                <div><MdHeadsetMic/></div>
              </div>
            </div>
            
            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-l border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-32">
              <div className="mr-4 w-24 font-light text-xl text-gray-600">Adobe</div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-500">
                <div><SiAdobephotoshop/></div>
                <div><SiAdobeillustrator/></div>
              </div>
            </div>

            <div className="flex flex-row-reverse flex-1 auto rounded-r-full items-center text-right py-1 border-l border-t border-b border-blue-600 bg-gray-800 transition duration-700 ease-in-out transform -translate-x-64 hover:bg-gray-700 hover:-translate-x-32">
              <div className="mr-4 w-24 font-light text-xl text-gray-600">Hosting</div>
              <div className="mr-12 w-64 flex flex-row-reverse space-x-reverse space-x-4 text-4xl text-gray-500">
                <div><SiVmware/></div>
                <div><SiDocker/></div>
              </div>
            </div>

          </div>

        </div>


      </div>

    );
  }
}