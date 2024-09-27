import PokemonCard from './PokemonCard';
// TODO: import the PokemonContext and useContext
import PokemonContext from '../context/PokemonContext';
import { useEffect, useState, useContext } from "react"
import Filter from './Filter';

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    //specifically importing the allPokemon state piece (which holds information about all the pokemon, fetched from our server) and its setter function by using a destructured import from its context, using the useContext hook.
    const { allPokemon, setAllPokemon } = useContext(PokemonContext); //destructuring the PokemonContext object to access the Pokemon data in allPokemon




    return (
        <div>
            <section>
                <Filter />
            </section>
            {/* pokemoncards section */}
            <div className="ui six cards">
                {/*The ?. operator is used for optional chaining. It safely checks if allPokemon is defined (not null or undefined) before attempting to call the map method on it. If allPokemon is null or undefined, the expression will short-circuit and return undefined instead of throwing an error. */}
                {/* Mapping out the objects of each index of the allPokemon array and rendering them their own card, using each individual element's information. The props take in the information from the context imported into PokemonCollection, populated by Pokemon(context)Provider. */}
                {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} imgFront={pokemon.front} imgBack={pokemon.back} />)}
            </div>
        </div>
    )
}

export default PokemonCollection