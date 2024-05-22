import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import LogoutPage from './pages/logout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<LoginPage />} exact />
          <Route path="/signup" element={<SignupPage />} exact />
          <Route path="/logout" element={<LogoutPage />} exact />
        </Routes>
      </Router>
    </>
    
    
      
  );
}

export default App;

