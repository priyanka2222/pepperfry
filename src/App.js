import './App.css';
import { Home } from './components/Home';
import {Routes, Route} from 'react-router-dom'
import { Products } from './components/Products';
import { SingleProduct } from './components/SingleProduct';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import {Signup} from './components/Signup'
import {PrivateRoute} from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute> } />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </div>
  );
}

export default App;
