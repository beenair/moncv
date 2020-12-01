import React from 'react'
import {SiLogmein,SiTeamviewer,SiVmware,SiDocker,SiOpenvpn,SiCisco,SiAdobephotoshop,SiAdobeillustrator} from 'react-icons/si'
import {DiWindows,DiLinux,DiApple} from 'react-icons/di'
import {MdHeadsetMic} from 'react-icons/md'
import {FaWifi,FaNetworkWired} from 'react-icons/fa'
import {GiSmartphone} from 'react-icons/gi'


export default function ItSkills(){
  
    return(


      <div className="grid grid-cols-2 gap-2 p-3">

        <div className="col-span-2 text-3xl font-light text-yellow-600 text-center bg-gray-700 rounded-lg">
          Informatique
        </div>

        
          {/* Systèmes d'exploitation */}
          <div className="bg-gray-400 rounded-lg px-2 pb-2">
            <div className="text-xl font-base mt-2">
              Systèmes d'exploitation :
            </div>

            <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
              <div className="flex flex-row gap-3 items-center">
                <div><DiWindows/></div>
                <div className="text-base">Windows</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><DiLinux/></div>
                <div className="text-base">Linux</div>
              </div>
              
              <div className="flex flex-row gap-3 items-center">
                <div><DiApple/></div>
                <div className="text-base">Mac OS</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><GiSmartphone/></div>
                <div className="text-base">Android / IOS</div>
              </div>
            </div>
          </div>


          {/* Réseau */}
          <div className="bg-gray-400 rounded-lg px-2 pb-2">
            <div className="text-xl font-baset mt-2">
              Réseaux informatiques :
            </div>

            <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
              <div className="flex flex-row gap-3 items-center">
                <div><FaWifi/></div>
                <div className="text-base">WiFi</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><FaNetworkWired/></div>
                <div className="text-base">Ethernet</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><SiOpenvpn/></div>
                <div className="text-base">VPN</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><SiCisco/></div>
                <div className="text-base">Routeurs / Switchs</div>
              </div>
            </div>
          </div>


          {/* Support */}
          <div className="bg-gray-400 rounded-lg px-2 pb-2">
            <div className="text-xl font-baset mt-2">
              Support utilisateurs :
            </div>

            <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
              <div className="flex flex-row gap-3 items-center">
                <div><SiLogmein/></div>
                <div className="text-base">LogMeIn</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><SiTeamviewer/></div>
                <div className="text-base">TeamViewer</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><MdHeadsetMic/></div>
                <div className="text-base">Téléphone</div>
              </div>
            </div>
          </div>


          {/* Adobe */}
          <div className="bg-gray-400 rounded-lg px-2 pb-2">
            <div className="text-xl font-baset mt-2">
              Logiciels Adobe :
            </div>

            <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
              <div className="flex flex-row gap-3 items-center">
                <div><SiAdobephotoshop/></div>
                <div className="text-base">Photoshop</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><SiAdobeillustrator/></div>
                <div className="text-base">Illustrator</div>
              </div>
            </div>
          </div>



          {/* Hosting */}
          <div className="bg-gray-400 rounded-lg px-2 pb-2">
            <div className="text-xl font-baset mt-2">
              Hosting :
            </div>

            <div className="text-2xl text-gray-700 flex flex-col gap-2 mt-2 ml-2">
              <div className="flex flex-row gap-3 items-center">
                <div><SiVmware/></div>
                <div className="text-base">VMWare</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div><SiDocker/></div>
                <div className="text-base">Docker</div>
              </div>
            </div>
          </div>


      </div>
      
    );
  
}