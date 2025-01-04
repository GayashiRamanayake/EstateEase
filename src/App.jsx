import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Search from './pages/Search/Search';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path='/search' element={<Search />} />
      </Routes>   
    </BrowserRouter>
  )
}
