import React, { Component } from 'react'


export default class Test extends Component{
  render(){
    return(

      <div className="h-screen bg-black">

        <div className="flex flex-row h-64 z-0 relative m-auto">

          <div className="flex flex-1 flex-col bg-blue-400 items-end">

            <div className="flex-1 w-1/3 rounded-l-full bg-green-700">Integration</div>
            <div className="flex-1 w-1/3 mr-6 rounded-l-full bg-green-400">Bases de données</div>
            <div className="flex-1 w-1/3 mr-10 rounded-l-full bg-green-700">Langages</div>
            <div className="flex-1 w-1/3 mr-6 rounded-l-full bg-green-400">Librairies</div>
            <div className="flex-1 w-1/3 rounded-l-full bg-green-700">Librairies</div>

          </div>


          <div className="rounded-full absolute absolute-center z-10 h-64 w-64 flex items-center justify-center bg-orange-400">
            PHOTO
          </div>


          <div className="flex-1 bg-green-400">

          </div>

          

        </div>

      </div>

    );
  }
}