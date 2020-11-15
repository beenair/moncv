import './tailwind.output.css'
import Header from './Components/header'
import Skills from './Components/skills'
import Experiences from './Components/experiences';

function App() {
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

export default App;
