import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Buy from './pages/Buy';
import Rent from './pages/Rent';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>   
    </BrowserRouter>
  )
}
