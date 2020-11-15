import React,{Component} from 'react';

export default class Experiences extends Component{
  render(){

    return(

      <div className ="grid grid-rows-6 gap-8">

        {/* JUXTA */}
        <div className="h-32 bg-black w-4/6 m-auto relative z-0">
          <div className="h-24 mt-4 items-center rounded-l-full rounded-r-full bg-gray-600">
            {/* Dates */}
            <div classname="">
              Dates
            </div>
            {/* Titre */}
            <div className="">
              Titre
            </div>
            {/* Fleche deroulement */}
            <div classname="">
              Fleche
            </div>
          </div>

          <div className="rounded-full h-32 w-32 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>


        {/* ELISATH */}
        <div className='h-32 bg-black w-4/6 m-auto relative z-0'>
          <div className="h-24 mt-4 rounded-l-full rounded-r-full bg-gray-600">

          </div>

          <div className="rounded-full h-32 w-32 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>


        {/* OSIATIS */}
        <div className='h-32 bg-black w-4/6 m-auto relative z-0'>
          <div className="h-24 mt-4 rounded-l-full rounded-r-full bg-gray-600">

          </div>

          <div className="rounded-full h-32 w-32 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>


        {/* SOLOREC */}
        <div className='h-32 bg-black w-4/6 m-auto relative z-0'>
          <div className="h-24 mt-4 rounded-l-full rounded-r-full bg-gray-600">

          </div>

          <div className="rounded-full h-32 w-32 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>



        {/* BACCARAT */}
        <div className='h-32 bg-black w-4/6 m-auto relative z-0'>
          <div className="h-24 mt-4 rounded-l-full rounded-r-full bg-gray-600">

          </div>

          <div className="rounded-full h-32 w-32 z-10 absolute top-0 ml-32 flex items-center justify-center bg-gray-900">

          </div>
        </div>



      </div>

    );
  }
}