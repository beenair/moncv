import React,{Component} from 'react';


export default class AdminTest extends Component {

  state = {
    nom : ''
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

            {/* nfos générales */}
            <section className="flex flex-col gap-2">

              <div className="flex flex-col">
                <label className="px-1">Nom :</label>
                <input type="text" value={this.state.nom} onChange={(e)=>this.setState({nom : e.target.value})} className="px-1 h-8 text-gray-600 rounded-md border-2 focus:border-2 focus:border-blue-400 focus:outline-none"></input>
              </div>
            
            </section>

              
            <input type="submit" value="Valider les changements" className="m-auto col-span-2 cursor-pointer py-1 px-2 rounded-lg bg-green-400"></input>

          </form>

        </div>

      </div>

    );
  }
}
