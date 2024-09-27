import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// TODO: Import the PokemonProvider and wrap it around the App component
import PokemonProvider from './context/PokemonProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //don't need the .Provider extension since this component already returns a .provider component 
    <PokemonProvider>
        <App />
    </PokemonProvider>

);
