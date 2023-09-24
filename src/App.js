import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemlistContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { NavBar } from './componentes/NavBar';
import { Cart } from "./componentes/Cart";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemlistContainer greeting='hello!' />} 
          />
          <Route  path ="/Cart"element={<Cart />} 
          />
          <Route path="/Category/:id" element={<ItemlistContainer greeting='hello!' />} 
          />
          <Route path="/Item/:id" element={<ItemDetailContainer />} 
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;