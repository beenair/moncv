import React,{Component} from 'react'
import axios from 'axios'
import Diplome from './diplome'


export default class Formation extends Component {

  state = {
    diplomes : []
  }

  componentDidMount(){
    axios.get("https://cv.beenair.fr/formation.php")
      .then(res=>{
        this.setState({diplomes : res.data});
      })
  }


  render(){

    const diplomes = this.state.diplomes.map(diplome=>{
      return <Diplome
        key = {diplome.id}
        titre = {diplome.titre}
        niveau = {diplome.niveau}
        annee = {diplome.annee_obtention}
        ecole = {diplome.ecole}
      />
    })

    return(
      <div className="mt-12 px-3">
        {/* Titre */}
        <div className="text-3xl text-center font-semibold">Formation</div>
        {/* Diplomes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {diplomes}
        </div>
      </div>
    );
  }
}