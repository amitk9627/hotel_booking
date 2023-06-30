import './App.css';
import Home from './containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HotelDetialPage from './containers/HotelDetialPage';
import LoginPage from './containers/LoginPage';
import LayOut from './containers/LayOut';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='home' element={<LayOut> <Home /> </LayOut>} />
          <Route path='home/hotelDetails/:slug' element={<LayOut> <HotelDetialPage /> </LayOut>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
//  https://hotels-api-4ltr.onrender.com/api/hotels/{slug}

export default App;
