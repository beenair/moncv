import MenuSidebar from './menuSidebar'
import Header from './header'
import Skills from './skills'
import Parcours from './parcours'
import Formation from './formation'
import Hobbies from './hobbies'


export default function Home() {

  return (

    <div className="grid lg:py-20 lg:w-3/4 min-h-screen m-auto max-w-screen-xl">


      {/* Menu Sidebar */}
      <div className="hidden lg:block w-16 h-screen fixed left-0 top-0 bg-gray-900">
        <MenuSidebar/>
      </div>


    {/* Content */}
    <div className="shadow-2xl flex flex-col">
      {/* Header */}
      <div>
        <Header/>
      </div>

      {/* Skills */}
      <div id="skills">
        <Skills/>
      </div>

      {/* Experiences */}
      <div id="parcours">
        <Parcours/>
      </div>

      {/* Formation */}
      <div id="formation">
        <Formation/>
      </div>

      {/* Loisirs */}
      <div id="hobbies">
        <Hobbies/>
      </div>

    </div>


    </div>

  );
}


