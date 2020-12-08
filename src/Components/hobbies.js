import React, {Component} from 'react'
import axios from 'axios'
import Loisir from './loisir'

export default class Hobbies extends Component {


  state = {
    hobbies : []
  }


  componentDidMount() {
    axios.get("https://cv.beenair.fr/hobbies.php")
      .then(res=>{
        this.setState({hobbies : res.data})
      })
  }



  render(){

    const hobbies = this.state.hobbies.map(hobbie=>{
      return <Loisir
        key = {hobbie.id}
        categorie = {hobbie.categorie}
        description = {hobbie.description}
      />
    })

    return(

      <div className="mt-12 mb-6 px-3">

        {/* Titre */}
        <div className="text-3xl text-center font-semibold">
          Loisirs
        </div>
        {/* Loisirs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {hobbies}
        </div>

      </div>
    )
  }
}