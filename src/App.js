import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo!"/>
      <ItemCount stockInicial={10} />
    </div>
  );
}

export default App;
