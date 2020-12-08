import React, {Component} from 'react'
import Missions from './missions'
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'


export default class Experience extends Component{

  constructor(props){
    super(props)
  }


  state = {
    show : false,
  }
  
  montrerMissions = ()=>{
    this.setState({
      show : !this.state.show

    })
  }


  render(){

    return(
      
      <section>

        {/* Exprerience */}
        <div className="h-auto w-full m-auto relative z-0 border-2">
          <div className="h-20 mt-2 flex flex-row items-center rounded-l-full rounded-r-full bg-gray-600">
            {/* Dates */}
            <div className="flex-initial">
              <div className="w-20 text-center text-base">
                {this.props.dateFin !== this.props.dateDebut ? <div>{this.props.dateFin}</div>  : null}
                {this.props.dateDebut}
              </div>
            </div>
            {/* Titre */}
            <div className="flex-1 px-2">
              <div className="ml-32 text-xl">
                {this.props.titre}
                </div>
            </div>
            {/* Fleche deroulement */}
            <div className="flex-initial">
              <div className="text-3xl pt-2 mr-8 cursor-pointer" onClick={this.montrerMissions}>
                {this.state.show ? <TiArrowSortedUp/> : <TiArrowSortedDown/> }
              </div>
            </div>
          </div>

          {/* Entreprise */}
          <div className="rounded-full h-24 w-24 z-10 absolute top-0 ml-24 text-yellow-600 flex items-center justify-center bg-gray-900">
            {this.props.entreprise}
          </div>

          {/* Missions */}
          { this.state.show ? <Missions
              id = {this.props.idExp}
            /> 
          : null }

        </div>

      </section>

    );  
  }

}