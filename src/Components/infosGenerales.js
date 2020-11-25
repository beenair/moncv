import React, { Component } from 'react';
import axios from 'axios'

export default class InfosGenerales extends Component{


  state = {
    infosProfil: [],
  }



  componentDidMount() {

    axios.get(`https://cv.beenair.fr/profil.php`)
    .then(res=>{
      this.setState({infosProfil : res.data});
    })
  }



  render(){    

    return(

      <div className="text-right">

        {/* Nom, Prenom */}
        <div className="text-3xl">
          {this.state.infosProfil.nom} {this.state.infosProfil.prenom}
        </div>

        {/* Date de naissance */}
        <div>
          {this.state.infosProfil.date_naissance}
        </div>

        {/* Telephone */}
        <div>
          {this.state.infosProfil.telephone}
        </div>

        {/* Mail */}
        <div>
          {this.state.infosProfil.mail}
        </div>

      </div>

    );
  }


}