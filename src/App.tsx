import './App.css';
import NavBar from './views/header/NavBar';
import LandingPage from './views/home/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
