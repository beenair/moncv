import React, { Component } from 'react';
import axios from 'axios'
import InfosProfil from './infosProfil'


export default class Profil extends Component {


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

      //Infos profil
      <InfosProfil
        presentation = {this.state.profil.presentation}
        mail = {this.state.profil.mail}
        telephone = {this.state.profil.telephone}
        date_naissance = {this.state.profil.date_naissance}
        permis = {this.state.profil.permis}
        mobilite = {this.state.profil.mobilite}
      />

    );
  }
}