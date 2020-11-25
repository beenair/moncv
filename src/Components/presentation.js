import React, { Component } from 'react'
import axios from 'axios'


export default class Presentation extends Component {


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

      <div>
        
        <div className="text-3xl">
          Présentation
        </div>


        <div>
          {this.state.infosProfil.presentation}
        </div>

      </div>

    );
  }
}