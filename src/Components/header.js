import React, { Component } from 'react';
import InfosGenerales from './infosGenerales'
import Presentation from './presentation';
import axios from 'axios'


export default class Header extends Component {


  state = {
    profil: [],
  }



  componentDidMount() {

    axios.get(`https://cv.beenair.fr/profil.php`)
    .then(res=>{
      this.setState({profil : res.data});
    })
  }


  render(){

    return(
      <div className="w-full flex flex-row bg-gray-800 h-64 max-w-screen-xl m-auto py-1">

        {/* Infos générales */}
        <div className="flex-1 px-2">
          <InfosGenerales
            nom = {this.state.profil.nom}
            prenom = {this.state.profil.prenom}
            datenaissance = {this.state.profil.date_naissance}
            mail = {this.state.profil.mail}
            telephone = {this.state.profil.telephone}
          />
        </div>

        {/* Photo */}
        <div className="flex-initial bg-orange-400 p-1">
          <div className="rounded-full h-64 w-64 flex items-center justify-center border-2 border-white">
            PHOTO
          </div>
        </div>

        {/* Présentation */}
        <div className="flex-1 px-2">
          <Presentation presentation = {this.state.profil.presentation}/>
        </div>

      </div>
    );
  }
}