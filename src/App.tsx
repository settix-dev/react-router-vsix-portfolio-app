import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './routes/About';
import Contacts from './routes/Contacts';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';


function App() {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      {/* <NavBar /> */}
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
