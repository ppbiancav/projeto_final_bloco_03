import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Home from './paginas/home/Home';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategorias';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
            <Navbar />
      <BrowserRouter>
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App