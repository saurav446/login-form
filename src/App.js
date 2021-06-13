import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"; 
import Deshbord from './Componente/Admin/Deshbord';
import Login from './Componente/Admin/Login';
import SignUp from './Componente/Admin/SignUp';  
import {AuthProviderUser, PRoute} from './Componente/Admin/UserContext'


function App() {
  
  return (
    <div className="App">
      <AuthProviderUser> 
      <Router>
      <Switch>  
          <Route path="/desh">
           <Deshbord></Deshbord>
          </Route> 
          <PRoute path="/Login">
            <Login></Login>
          </PRoute> 
          <Route path="/Signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/">
            <SignUp></SignUp>
          </Route> 
      </Switch>
        </Router> 
        </AuthProviderUser>
    </div>   
  );
}

export default App;
