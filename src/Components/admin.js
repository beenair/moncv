import React, { Component }from 'react';
import {Switch,Route,Link} from 'react-router-dom'

import AdminMenu from './adminMenu'
import AdminInfo from './adminInfos'
import AdminSkills from './adminSkills'
import AdminExperience from './adminExperience'
import AdminFormation from './adminFormation'
import AdminHobbies from './adminHobbies'
import AdminPortfolio from './adminPortfolio'
import AdminTest from './adminTest'

import {GoSettings} from 'react-icons/go'
import {AiFillHome} from 'react-icons/ai'


export default class Admin extends Component {

  render(){

    return(


        <div className="h-screen w-full relative">


            {/* HEADER */}
            <div className="fixed top-0 h-16 w-full px-2 flex flex-row items-center space-x-2 text-xl text-white font-semibold bg-blue-600">
              <div className="flex-initial"><GoSettings/></div>
              <div className="flex-1">Portail d'aministration</div>
              <div className="flex-initial"> <Link to='/'> <AiFillHome/> </Link> </div>
            </div>

            {/* PAGE */}
            <div className="mt-16 w-full min-h-full flex flex-row">

              {/* Menu latéral */}
              <div className="fixed left-0 h-full w-48 px-2 py-4 bg-blue-300">
                <AdminMenu/>
              </div>

              {/* Contenu */}
              <div className="w-full min-h-full ml-48 bg-gray-300">

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

                  <Route path="/admin/test">
                    <AdminTest/>
                  </Route>

                </Switch>

              </div>

            </div>

        </div>


    );
  }
}