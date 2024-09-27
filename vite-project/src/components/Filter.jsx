// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import PokemonContext from "../context/PokemonContext"
import { useContext, useState, useEffect } from "react"

const Filter = () => {
    //setting filtered pokemon states so we can sift through them 
    const { allPokemon, setAllPokemon } = useContext(PokemonContext);
    //setting the query value 
    const [query, setQuery] = useState('');
    //setting a pokemon state piece to hold the original array of pokemon (before being filtered)
    const [originalPokemon, setOriginalPokemon] = useState(allPokemon);

    //setting original pokemon using effect, that way when changes occur in allPokemon it'll reinstate the original pokemon value 
    //useEffect is here to keep track of the allPokemon data array, so that when it changes (hence the dependency [allPokemon], which means it's watching that state piece for any changes in value)
    //it will update the originalPokemon state piece to reflect those changes. 
    useEffect(() => {
        setOriginalPokemon(allPokemon);
    }, [allPokemon])

    //calling this function every time there's a change in the input 
    const searchAsWeGo = (event) => {
        //updating the query state with each key press using setQuery setter function 
        setQuery(event.target.value);

        //filtering allPokemon by init a function, using the filter array method, and checking each element's name property to see if it includes the query
        const filteredPokemon = allPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );

        // Update the state with the filtered Pokémon
        setAllPokemon(filteredPokemon);
    }


    //resetting the query state piece so the filter bar is blank, and re-enstating the whole collection
    const resetButtonFunc = (event) => {
        console.log('click')
        //setting the query back to empty using the setter function
        setQuery('');
        //setting allPokemon array back to its original state
        setAllPokemon(originalPokemon);

    }

    return (
        <div className="ui search">
            <div className="ui icon input">
                {/* adapting filter search by making the value of the input the query, and updating the query as it goes using this cbf that utilizes the setQuery value.*/}
                <input className="prompt" placeholder="Search by Name..." value={query} onChange={(e) => searchAsWeGo(event)} />
                <i className="search icon" />

            </div>
            <button className="ui button" onClick={resetButtonFunc}>Reset</button>
        </div>
    )
}

export default Filter