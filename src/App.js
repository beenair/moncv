import React from 'react'
import './tailwind.output.css'
import Home from './Components/home';
import Admin from './Components/admin/admin';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default function App() {
  return (

    <Router>

        <div className="bg-gray-300">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>

    </Router>

  );
}