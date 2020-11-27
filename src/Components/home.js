import Profil from './profil'
import Skills from './skills'
// import Experiences from './experiences';
// import Formation from './formation'
import { Route } from 'react-router-dom';
import Menu from './menu';

export default function Home() {

  return (

    <div className="grid pt-24 w-3/4 h-screen m-auto max-w-screen-xl">

      {/* SidebarLeft */}
      <div className="w-16 h-screen fixed left-0 top-0 bg-gray-900">
        <Menu/>
      </div>

      {/* Content */}
      <div className="shadow-2xl flex flex-row">
        {/* Header */}
        <div>

        </div>
      </div>


    </div>

  );
}


