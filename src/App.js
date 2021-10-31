//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import './App.css';
import Doctors from './doctors';
import { DoctorContextProvider } from './doctors/context';
import Navs from './nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';


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
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
