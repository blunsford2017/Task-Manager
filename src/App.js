// Always in app
import logo from './logo.svg';
import './App.css';

// import fromcomponents
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//Import from pages
import DahsboardPage from './Pages/DashboardPage'; 
import HomePage from './Pages/HomePage'; 
import LoginPage from './Pages/LoginPage'; 
import SignupPage from './Pages/SignupPage'; 

// Import switch and route
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <Header />

      {/* add the switch component
      inside of switch component you need a route for each page */}
      <Switch>
        <Route exact path='/dashboard' render={ props => 
          <DashboardPage />
        }/>

        <Route exact path='/' render={ props => 
          <HomePage />
        }/>

        <Route exact path='/login' render={ props => 
          <LoginPage />
        }/>

        <Route exact path='/signup' render={ props => 
          <SignupPage />
        }/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
