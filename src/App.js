import './App.css';
import Doctors from './doctors';
import { DoctorContextProvider } from './doctors/context';
import Navs from './nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';


function App() {
  return (
    <Router>
      <Navs />
      <Switch>
        <Route path="/doctors">
          <DoctorContextProvider>
            <Doctors />
          </DoctorContextProvider>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
