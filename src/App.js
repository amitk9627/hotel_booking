import './App.css';
import Navbar from './components/Navbar'
import Home from './containers/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HotelDetialPage from './containers/HotelDetialPage';
import LoginPage from './containers/LoginPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage />}/>
        <Route path='home' element={<Home />}/>
        <Route path='hotelDetails/:slug' element={<HotelDetialPage />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
//  https://hotels-api-4ltr.onrender.com/api/hotels/{slug}

export default App;
