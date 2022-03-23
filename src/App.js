
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const titulo2 = 'Soy el contador'
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidxs!' titulo2={titulo2} />
    </div>
  );
}

export default App;
