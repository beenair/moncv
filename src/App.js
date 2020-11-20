import './tailwind.output.css'
import Landing from './Components/landing';
import Admin from './Components/admin';
import {Switch, Route} from 'react-router-dom';



function App() {
  return (

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>

  );
}

export default App;
