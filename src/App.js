import './tailwind.output.css'
import Landing from './Components/landing';
import Admin from './Components/admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

    <Router>

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>

    </Router>

  );
}

export default App;
