import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo!"/>
    </div>
  );
}

export default App;
