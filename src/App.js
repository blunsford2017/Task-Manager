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

function App() {
  return (
    <div className="App">
      <Header />
      <DahsboardPage />
      <HomePage />
      <LoginPage />
      <SignupPage />
      <Footer />
    </div>
  );
}

export default App;
