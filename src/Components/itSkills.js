import React from 'react'
import {SiLogmein,SiTeamviewer,SiVmware,SiDocker,SiOpenvpn,SiCisco,SiAdobephotoshop,SiAdobeillustrator,SiIos} from 'react-icons/si'
import {DiWindows,DiLinux,DiApple,DiAndroid} from 'react-icons/di'
import {MdHeadsetMic} from 'react-icons/md'
import {FaWifi,FaNetworkWired} from 'react-icons/fa'


export default function ItSkills(){
  
    return(


      <div className="flex flex-col p-3">

        <div className="text-3xl font-bold text-yellow-600">
          Informatique générale
        </div>

        
          {/* Systèmes d'exploitation */}
          <div className="text-2xl font-base mt-4">
            Systèmes d'exploitation :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <DiWindows/>
            <DiLinux/>
            <DiApple/>
            <SiIos/>
            <DiAndroid/>
          </div>


          {/* Réseau */}
          <div className="text-2xl font-baset mt-4">
            Réseaux informatiques :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <FaWifi/>
            <SiOpenvpn/>
            <SiCisco/>
            <FaNetworkWired/>
          </div>


          {/* Support */}
          <div className="text-2xl font-baset mt-4">
            Support utilisateurs :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <SiLogmein/>
            <SiTeamviewer/>
            <MdHeadsetMic/>
          </div>


          {/* Adobe */}
          <div className="text-2xl font-baset mt-4">
            Logiciels Adobe :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <SiAdobephotoshop/>
            <SiAdobeillustrator/>
          </div>



          {/* Hosting */}
          <div className="text-2xl font-baset mt-4">
            Hosting :
          </div>

          <div className="text-4xl text-gray-700 flex flex-row gap-4 mt-2">
            <SiVmware/>
            <SiDocker/>
          </div>


      </div>
      
    );
  
}