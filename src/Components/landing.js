import Header from './header'
import Skills from './skills'
import Experiences from './experiences';
import Formation from './formation'

function Landing() {
  return (

    <div className="grid gap-12 bg-gray-900">

      {/* ENTETE */}
      <div className="bg-gray-800">
        <Header/>
      </div>

      {/* SKILLS */}
      <div className="bg-gray-900">
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

  );
}

export default Landing;
