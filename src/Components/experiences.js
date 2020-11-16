import React,{Component} from 'react';
import {TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti'

export default class Experiences extends Component{

  state = {
    show : false
  }

  montrerMissions = ()=>{
    this.setState({
      show : !this.state.show  
    })
  }

  render(){

    return(

      <div className ="grid gap-8">

        {/* Entreprise */}
        <div className="h-24 bg-black w-4/6 m-auto relative z-0">
          <div className="h-20 mt-2 flex flex-row items-center rounded-l-full rounded-r-full bg-gray-600">
            {/* Dates */}
            <div classname="flex-initial">
              <div className="w-24 text-center">Dates</div>
            </div>
            {/* Titre */}
            <div className="flex-1">
              <div className=" ml-32">Titre</div>
            </div>
            {/* Fleche deroulement */}
            <div classname="flex-initial">
              <div onClick={this.montrerMissions} className="w-16 text-4xl cursor-pointer">
                {this.state.show ? <TiArrowSortedUp/> : <TiArrowSortedDown/> }
              </div>
            </div>
          </div>

          <div className="rounded-full h-24 w-24 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>


        {/* Missions */}
          {this.state.show ? (
            <div className="bg-gray-400 w-5/6 h-auto m-auto py-4 px-2 rounded-b-xl border-2 border-gray-600">
              <ul className="space-y-2">
                <li>Analyse en bases de données et code logiciel.</li>
                <li>Requeting SQL, migration, sauvegardes, restauration de bases de données</li>
                <li>Création, mise à jour de procédures</li>
                <li>Suivi clients grands comptes</li>
                <li>Déploiement informatique (logiciel, matériel)</li>
                <li>Formation sur site et à distance</li>
              </ul>
            </div>
          ) : null }

          


        </div>

      </div>

    );
  }
}