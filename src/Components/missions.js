import React, {Component} from 'react'
import axios from 'axios'
import Mission from './mission'



export default class Missions extends Component {

  constructor(props){
    super(props)
  }

  state = {
    missions : []
  }

  componentDidMount() {
    axios.get('https://api.beenair.fr/missions/' + this.props.id)
    .then(res=>{
      console.log(res.data);
      this.setState({missions : res.data});
    })
  }

  render(){

    const missions = this.state.missions.map(mission=>{

      return <Mission
        key = {mission.id}
        description = {mission.description}
        />
    })

    return(

      <div className="h-auto mx-10 m-auto bg-gray-400 border border-gray-600 p-2 rounded-b-lg">
        <ul>{missions}</ul>
      </div>

    )
  }
}