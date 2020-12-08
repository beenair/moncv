import React, {Component} from 'react'
import axios from 'axios'
import Experience from './experiences'


export default class Parcours extends Component {


  state = {
    experiences : [],
  }


  componentDidMount() {

    axios.get('https://cv.beenair.fr/experience.php')
    .then(res=>{
      this.setState({experiences : res.data});
    })

  }


  render(){

    const experiences = this.state.experiences.map(exp=>{
      return <Experience 
        key = {exp.id}
        idExp = {exp.id}
        entreprise = {exp.entreprise}
        titre = {exp.titre}
        dateDebut = {exp.dateDebut}
        dateFin = {exp.dateFin}
        />
    })

    return(

      <div className="mt-12">
        {/* Titre */}
        <div className="text-3xl text-center font-semibold">
          Expériences Professionnelles
        </div>
        {/* Expériences */}
        <div className="flex flex-col gap-2 px-3 mt-8">
          {experiences}
        </div>
      </div>


    );
  }
}