import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
