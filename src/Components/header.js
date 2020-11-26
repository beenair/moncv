import React, { Component } from 'react';
import axios from 'axios'
import InfosGenerales from './infosGenerales'


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

      <div className="w-full flex flex-col text-white h-auto max-w-screen-xl m-auto">

        {/* Infos générales */}
        <InfosGenerales
          nom = {this.state.profil.nom}
          prenom = {this.state.profil.prenom}
          presentation = {this.state.profil.presentation}
          titre = {this.state.profil.titre}
          mail = {this.state.profil.mail}
          telephone = {this.state.profil.telephone}
          date_naissance = {this.state.profil.date_naissance}
          permis = {this.state.profil.permis}
          mobilite = {this.state.profil.mobilite}
        />
        
      </div>

    );
  }
}