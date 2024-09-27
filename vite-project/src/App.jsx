import PokemonForm from './components/PokemonForm'
import Filter from './components/Filter'
import PokemonCollection from './components/PokemonCollection'
import PokemonProvider from './context/PokemonProvider';

const App = () => {
  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <PokemonForm />
      <br />
      {/* pokemon collection */}
      <PokemonCollection />


    </div>
  );
}

export default App;
