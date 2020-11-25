import React,{Component} from 'react';
import axios from 'axios';


export default class AdminInfo extends Component {


  state = {
      Profil: [],
  }



  componentDidMount() {

    axios.get(`https://cv.beenair.fr/profil.php`)
    .then(res=>{
      this.setState({Profil : res.data});
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

        <div className="w-5/6">


          <form className="mt-8 p-2 border-2 border-gray-400 grid grid-cols-2 gap-6">

            {/* Infos générales */}
            <section className="flex flex-col gap-2">

              <div className="flex flex-col">
                <label className="px-1">Nom :</label>
                <input type="text" value={this.state.Profil.nom} onChange={this.handleChange} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Prenom :</label>
                <input type="text" value={this.state.Profil.prenom} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Date de naissance :</label>
                <input type="text" value= {this.state.Profil.date_naissance} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Email :</label>
                <input type="text" value= {this.state.Profil.mail} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Téléphone :</label>
                <input type="text" value= {this.state.Profil.telephone} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>
            
            </section>


            {/* Localisation / Mobilité */}
            <section className=" flex flex-col gap-2">

              <div className="flex flex-col">
                <label className="px-1">Code postale :</label>
                <input type="text" value= {this.state.Profil.adresse_code_postale} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>
            
              <div className="flex flex-col">
                <label className="px-1">Ville :</label>
                <input type="text" value= {this.state.Profil.adresse_ville} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Permis :</label>
                <input type="text" value={this.state.Profil.permis} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>

              <div className="flex flex-col">
                <label className="px-1">Mobilité :</label>
                <input type="text" value={this.state.Profil.mobilite} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>      
              </div>

            </section>


            {/* Presentation */}
            <section className="col-span-2 mt-8">
              <div className="flex flex-col">
                <label className="px-1">Présentation :</label>
                <textarea rows="10" cols="60" value={this.state.Profil.presentation} className="px-1 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></textarea>      
              </div>
            </section>

            
            <input type="submit" value="Valider les changements" className="m-auto col-span-2 cursor-pointer py-1 px-2 rounded-lg bg-green-400"></input>

          </form>

        </div>

      </div>

    );
  }
}
