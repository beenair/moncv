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
        <div>

          <form>

            <div>
              <label>Nom :</label>
              <input></input>
              <label>Prenom :</label>
              <input></input>
              <label>Date de naissance :</label>
              <input></input>
            </div>

            <div>
              <label>Email :</label>
              <input></input>
              <label>Téléphone :</label>
              <input></input>
            </div>

            <div>
              <label>Numéro :</label>
              <input></input>
              <label>Voie :</label>
              <input></input>
            </div>

            <div>
              <label>Code postale :</label>
              <input></input>
              <label>Ville :</label>
              <input></input>
            </div>

          </form>

        </div>


      </div>

    );
  }
}
