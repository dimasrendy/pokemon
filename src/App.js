import './App.css';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import { Route, Routes } from 'react-router-dom';
import MyPokemonList from './MyPokemonList';
import { Fragment } from 'react';
import NavbarHome from './NavbarHome';


function App() {
  return (
    <Fragment>
      <nav>
        <Routes>
          <Route path='/' element={<NavbarHome />} />
          <Route path='/*' element={<Navbar/>} />
        </Routes>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemon/:name' element={<PokemonDetail />} />
          <Route path='/mypokemon/' element={<MyPokemonList />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
