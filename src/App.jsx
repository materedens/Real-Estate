import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import NavbarCustom from './components/Navbar/NavbarCustom';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='services' element={<Services />} />
        <Route exact path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
