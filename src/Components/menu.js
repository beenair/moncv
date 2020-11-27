import {HiUser, HiPhone} from 'react-icons/hi'
import {GoMortarBoard, GoCloudDownload} from 'react-icons/go'
import {GiSuitcase ,GiSoccerBall,GiMuscleUp} from 'react-icons/gi'
import {CgBee} from 'react-icons/cg'
import {Link} from 'react-router-dom'

export default function Menu(){

  return(

    // Menu
    <div className="w-full h-full text-3xl text-yellow-600 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex place-content-center place-items-center">
        <CgBee/>
      </div>
      {/* Liens */}
      <div className="flex flex-1 flex-col gap-5 place-content-center place-items-center">
        <Link to='/profil' className="transform duration-500 hover:scale-150"> <HiUser/> </Link>
        <Link to='/skills' className="transform duration-500 hover:scale-150"> <GiMuscleUp/> </Link>
        <Link to='/contact' className="transform duration-500 hover:scale-150"> <HiPhone/> </Link>
        <Link to='/parcours' className="transform duration-500 hover:scale-150"> <GiSuitcase/> </Link>
        <Link to='/formation' className="transform duration-500 hover:scale-150"> <GoMortarBoard/> </Link>
        <Link to='/hobbies' className="transform duration-500 hover:scale-150"> <GiSoccerBall/> </Link>
      </div>
      {/* Download */}
      <div className="h-16 flex place-content-center place-items-center">
        <Link to='/download' className="transform duration-500 hover:scale-150"> <GoCloudDownload/> </Link>
      </div>
    </div>

  );

}

