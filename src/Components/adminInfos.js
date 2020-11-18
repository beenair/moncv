import React,{Component} from 'react';


export default class AdminInfo extends Component {

  render(){

    return(

      <div className="px-2 py-4">
        
        {/* Titre */}
        <div className="text-2xl font-semibold">
          Formulaire d'informations:
        </div>

        {/* Formulaire */}
        <div className="w-auto">

          <form className="mt-6 p-2 border-2 border-gray-400">

                
                  <label>Nom :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>

              
                  <label>Prenom :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


                  <label>Date de naissance :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


                  <label>Permis :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


                  <label>Email :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


                  <label>Téléphone :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
 

                  <label>Numéro :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
                

                  <label>Voie :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


                  <label>Code postale :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
                

                  <label>Ville :</label>
                  <input className="px-1 border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>


          </form>

        </div>


      </div>

    );
  }
}
