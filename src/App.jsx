import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Search from './pages/Properties/Search';
import HomePage from './pages/Home/HomePage';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/Homepage' element={<HomePage />} />
      </Routes>   
    </BrowserRouter>
  )
}
