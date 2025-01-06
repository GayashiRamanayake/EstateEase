import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar'; 
import Search from './Search'; 
import HomePage from './pages/Home/HomePage'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyPage from "./pages/properties/PropertyPage";
import About from './pages/AboutUs/About';
import Contact from './pages/ContactUs/Contact';

export default function App() {
  return (
    <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/HomePage" element={<HomePage />} /> 
          <Route path="/search" element={<Search />} /> 
          <Route path="/properties/:id" element={<PropertyPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}
