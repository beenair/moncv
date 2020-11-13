import React, { Component } from 'react';

export default class InfosGenerales extends Component{

  render(){    

    return(

      <div className="text-right">

        {/* Nom, Prenom */}
        <div className="text-3xl">
          Benjamin THOMAS
        </div>

        {/* Date de naissance */}
        <div>
          8 Aout 1986
        </div>

        {/* Telephone */}
        <div>
          0612345678
        </div>

        {/* Mail */}
        <div>
          test@bla.fr
        </div>

      </div>

    );
  }
  }