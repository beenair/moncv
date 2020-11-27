import React, {Component} from 'react';
import InfosProfil from "./infosProfil";
import axios from 'axios'

export default class Header extends Component{

  state = {
    Profil: [],
  }


  componentDidMount() {

    axios.get(`https://cv.beenair.fr/profil.php`)
    .then(res=>{
      console.log(res.data);
      this.setState({Profil : res.data});
    })
  }

  render(){
    
    return(
      <InfosProfil
        nom = {this.state.Profil.nom}
        prenom = {this.state.Profil.prenom}
        titre = {this.state.Profil.titre}
        presentation = {this.state.Profil.presentation}
        mail = {this.state.Profil.mail}
        telephone = {this.state.Profil.telephone}
      />
    );
  }
}