import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
