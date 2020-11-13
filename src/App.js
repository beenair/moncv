import './tailwind.output.css'
import Header from './Components/header'
import Skills from './Components/Skills'
import Test from './Components/test'

function App() {
  return (

    <div>

      {/* test */}
      <div className="bg-gray-800">
        <Test/>
      </div>

      {/* ENTETE */}
      <div className="bg-gray-800">
        <Header/>
      </div>

      {/* SKILLS */}
      <div className="bg-gray-700 h-screen">
        <Skills/>
      </div>

      {/* PARCOURS */}
      <div className="bg-gray-800">
        
      </div>

      {/* FORMATION */}
      <div className="bg-gray-700 h-screen">
        
      </div>

      {/* HOBBIES */}
      <div className="bg-gray-800 h-screen">
        
      </div>

      {/* PORTFOLIO */}
      <div className="bg-gray-700 h-screen">
        
      </div>

      {/* FORMULAIRE CONTACT */}
      <div className="bg-gray-800 h-screen">
        
      </div>

    </div>

  );
}

export default App;
