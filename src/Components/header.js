import React, {Component} from 'react';
import InfosProfil from './infosProfil';
import axios from 'axios'

export default class Header extends Component{

  state = {
    Profil: []
  }


  componentDidMount() {

    axios.get(`https://api.beenair.fr/profil`)
    .then(res=>{
      this.setState({Profil : res.data});
    })
  }

  

  render(){

    const profil = this.state.Profil.map(profil=>{
      return <InfosProfil
        key = {profil.id}
        nom = {profil.nom}
        prenom = {profil.prenom}
        titre = {profil.titre}
        presentation = {profil.presentation}
        mail = {profil.mail}
        telephone = {profil.telephone}
        codepostale = {profil.adresse_code_postale}
        ville = {profil.adresse_ville}
        permis = {profil.permis}
        vehicule = {profil.vehicule}
        mobilite = {profil.mobilite}
      />  
    }
    )
    
    return(

      <div>
        {profil}
      </div>


      
    );
  }
}