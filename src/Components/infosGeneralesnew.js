import React, { Component } from 'react';
import axios from 'axios';

 export default class InfosGenerales extends Component {

  constructor(props){
    super(props)

    this.state = {
      infos : []
    }
  }

  componentDidMount(){
    axios.get('https://dev.beenair.fr/profil.php')
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render(){
    return(
      <div>
        Liste des informations
      </div>
    );
  }
}