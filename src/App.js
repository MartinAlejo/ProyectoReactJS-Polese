import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";
import { NotFound } from "./components/NotFound/NotFound";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>

      <CartContextProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryName" element={ <ItemListContainer /> } />
          <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        
        <Footer />

      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
