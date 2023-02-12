import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
