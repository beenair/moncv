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
    axios.get('https://cv.beenair.fr/missions.php' + this.props.id)
    .then(res=>{
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

      <div className="h-auto w-5/6 m-auto bg-red-500 p-2 rounded-b-lg">
        <ul>{missions}</ul>
      </div>

    )
  }
}