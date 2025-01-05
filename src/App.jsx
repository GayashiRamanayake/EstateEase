import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar'; 
import Search from './Search'; 
import HomePage from './pages/Home/HomePage'; 
import Properties from "./components/properties_page/Properties";
import Property from "./components/properties_page/Property";
import { FavoriteProvider } from './components/properties_page/FavoriteContext'; // Import FavoriteProvider
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider> {/* Wrap everything inside FavoriteProvider */}
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/HomePage" element={<HomePage />} /> 
          <Route path="/properties" element={<Properties />} />
          <Route path="/Properties/:id" element={<Property />} />
          <Route path="/search" element={<Search />} /> 
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}
