import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/login';
import HomePage from './pages/Home/Home';
import PrivateRoute from './componennts/PrivateRoute/PrivateRoute';
import DisplayImage from './pages/DisplayImage/DisplayImage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/displayImage/:id' element={<DisplayImage />}></Route>
      <Route path='/homePage' element={<PrivateRoute>
        <HomePage />
      </PrivateRoute>}></Route>
    </Routes>
      </BrowserRouter>
    
  );
}

export default App;
