import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:categoryName" element={ <ItemListContainer /> } />
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={ <h1 style={{alignSelf: "center"}}> <b> 404 Not Found </b> </h1> } />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
