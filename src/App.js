
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const titulo2 = 'Soy el contador'
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>

      
      
    </div>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting='¡Bienvenidxs!' titulo2={titulo2} />}/>
      <Route path="/item" element={<ItemDetailContainer />}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
