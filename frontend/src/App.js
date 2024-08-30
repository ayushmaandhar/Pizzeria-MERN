import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import OrderPizza from './pages/OrderPizza';
import BuildPizza from './pages/BuildPizza';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Router>
      <Toaster position="bottom-center" />
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/order' element={<OrderPizza/>}/>
          <Route path='/build' element={<BuildPizza/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
