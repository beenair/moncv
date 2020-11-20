import React,{Component} from 'react';
import axios from 'axios';


export default class AdminInfo extends Component {


  state = {
      infosGenerales: [],
  }


  componentDidMount() {

    axios.get(`https://cv.beenair.fr/profil.php`).then(res=>{
      this.setState({infosGenerales : res.data});
    })
  }


  render(){

    return(

      <div className="px-2 py-4">
        
        {/* Titre */}
        <div className="text-2xl font-semibold">
          Formulaire d'informations:
        </div>

        {/* Formulaire */}

          <form className="mt-6 p-2 border-2 border-gray-400 flex gap-6">

            <div className="w-64 flex flex-col gap-2">

              <div className="flex flex-col">
                <label>Nom :</label>
    <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none">{}</input>
              </div>

              <div className="flex flex-col">
                <label>Prenom :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label>Date de naissance :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label>Email :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label>Téléphone :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>
            
            </div>



            <div className="w-64 flex flex-col gap-2">

              <div className="flex flex-col">
                <label>Code postale :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>
            
              <div className="flex flex-col">
                <label>Ville :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label>Permis :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label>Mobilité :</label>
                <input type="text"className="px-1 h-8 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>      
              </div>

            </div>

          </form>


      </div>

    );
  }
}
