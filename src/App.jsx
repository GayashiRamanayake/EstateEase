import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Search from './pages/Search';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path='/search' element={<Search />} />
      </Routes>   
    </BrowserRouter>
  )
}
