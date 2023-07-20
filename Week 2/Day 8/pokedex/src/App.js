

import './App.css';
import SearchBar from './components/SearchBar';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App bg-dark">
      <h1 className='text-white text-center pt-4' id="title">Pokedex</h1>
      <SearchBar/>
    </div>
  );
}

export default App;
