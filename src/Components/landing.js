import Header from './header'
import Skills from './skills'
import Experiences from './experiences';
import Formation from './formation'
import MenuTop from './menuTop';

function Landing() {

  return (

    <div className="grid p-24  bg-gray-300 relative">

      {/* MENU */}
      {/* <div className="">
        <MenuTop/>
      </div> */}

      <div className="shadow-2xl">

        {/* ENTETE */}
        <div>
          <Header/>
        </div>

        {/* SKILLS */}
        <div className="bg-gray-900 px-4">
          <Skills/>
        </div>

        {/* PARCOURS */}
        <div className="bg-gray-800">
          <Experiences/>
        </div>

        {/* FORMATION */}
        <div className="bg-gray-700 h-screen">
          <Formation/>
        </div>

        {/* HOBBIES */}
        <div className="bg-gray-800 h-screen">
          
        </div>

        {/* PORTFOLIO */}
        <div className="bg-gray-700 h-screen hidden">
          
        </div>

        {/* FORMULAIRE CONTACT */}
        <div className="bg-gray-700 h-screen">
          
        </div>


      </div>


    </div>

  );
}

export default Landing;
