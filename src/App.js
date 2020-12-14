// Always in app
import './App.css';
import {  useState } from 'react';

// import fromcomponents
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//Import from pages
import DashboardPage from './Pages/DashboardPage';
import HomePage from './Pages/HomePage'; 
import LoginPage from './Pages/LoginPage'; 
import SignupPage from './Pages/SignupPage'; 

// Import switch and route
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { getUser, logout } from './Services/userService';

function App(props) {
  /* component state */
  const [ userState, setUserState ] = useState({ user: getUser()});
    
  /* helper functions */
  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to dashboard
    props.history.push('/dashboard');
  }

  function handleLogout() {
    logout(); 
    setUserState({ user: null }); 
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/" render={ props => 
            <HomePage />
          } />
          <Route exact path="/dashboard" render={ props => 
            getUser() ?
              <DashboardPage />
              :
              <Redirect to="/login" />
          } />
          <Route exact path="/signup" render={ props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/login" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
        </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);