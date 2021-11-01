//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import './App.css';
import Doctors from './doctors';
import { DoctorContextProvider } from './doctors/context';
import Navs from './nav';
import api from './constants/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import AddDoctor from './doctors/addDoctor';
import { useEffect, useState } from 'react';
import { validate } from './services/db';

const ProtectedRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      render={props => (
        authenticated ?
          <Component {...rest} {...props} /> :
          <Redirect to='/login' />
      )}
    />
  )
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await validate();
      setAuthenticated(res);
      setValidated(true);
      // validate token
    })();
  }, [validated])
  return (
    <Router>
      <DoctorContextProvider>
        {validated ? (
          <div>
            <Navs authenticated={authenticated} />
            <Switch>
              {validated && !authenticated ? (
                <Route path="/login" exact component={Login} />
              ) : (
                ""
              )}
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/doctors" exact component={Doctors} />
              <ProtectedRoute authenticated={authenticated} path="/doctors/add" component={AddDoctor} />
              <Redirect to='/'/>
            </Switch>
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </DoctorContextProvider>
    </Router >
  );
}

export default App;
