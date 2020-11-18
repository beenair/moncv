import React, { Component }from 'react';
import {Switch,Route,Link} from 'react-router-dom'

import AdminMenu from './adminMenu'
import AdminInfo from './adminInfos'
import AdminSkills from './adminSkills'
import AdminExperience from './adminExperience'
import AdminFormation from './adminFormation'
import AdminHobbies from './adminHobbies'
import AdminPortfolio from './adminPortfolio'

import {GoSettings} from 'react-icons/go'
import {AiFillHome} from 'react-icons/ai'


export default class Admin extends Component {

  render(){

    return(


        <div className="h-screen">


            {/* HEADER */}
            <div className="h-16 px-2 flex flex-row items-center space-x-2 text-xl text-white font-semibold bg-blue-600">
              <div className="flex-initial"><GoSettings/></div>
              <div className="flex-1">Portail d'aministration</div>
              <div className="flex-initial"> <Link to='/'> <AiFillHome/> </Link> </div>
            </div>

            {/* PAGE */}
            <div className="h-full flex flex-row">

              {/* Menu latéral */}
              <AdminMenu/>

              {/* Contenu */}
              <div className="w-full h-full bg-gray-300">

                <Switch>

                  <Route path="/admin/infos">
                    <AdminInfo/>
                  </Route>

                  <Route path="/admin/skills">
                    <AdminSkills/>
                  </Route>

                  <Route path="/admin/experiences">
                    <AdminExperience/>
                  </Route>

                  <Route path="/admin/formation">
                    <AdminFormation/>
                  </Route>

                  <Route path="/admin/loisirs">
                    <AdminHobbies/>
                  </Route>

                  <Route path="/admin/portfolio">
                    <AdminPortfolio/>
                  </Route>

                </Switch>

              </div>

            </div>

        </div>


    );
  }
}