import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {FaUser,FaIndustry,FaAward,FaBasketballBall} from 'react-icons/fa';
import {IoIosStats,IoMdSchool} from 'react-icons/io';


export default class AdminMenu extends Component{
  render(){
    
    return(
  
      <div className="flex flex-col gap-4">

        <div className="flex flex-row space-x-2 items-center">
          <div><FaUser/></div>
          <div><Link to='/admin/infos'>Informations</Link></div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div><IoIosStats/></div>
          <div><Link to='/admin/skills'>Skills</Link></div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div><FaIndustry/></div>
          <div><Link to='/admin/experiences'>Expériences</Link></div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div><IoMdSchool/></div>
          <div><Link to='/admin/formation'>Formation</Link></div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div><FaBasketballBall/></div>
          <div><Link to='/admin/loisirs'>Hobbies</Link></div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div><FaAward/></div>
          <div><Link to='/admin/portfolio'>Porfolio</Link></div>
        </div>

      </div>
  
    );
  }
  
};
