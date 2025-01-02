import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>   
    </BrowserRouter>
  )
}
