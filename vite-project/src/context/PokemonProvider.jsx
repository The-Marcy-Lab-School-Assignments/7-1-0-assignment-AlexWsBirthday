import { useEffect, useState } from "react";
import handleFetch from '../utils/handleFetch';

// TODO: Import the PokemonContext
import PokemonContext from "./PokemonContext";

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]
// Every time that we add a new pokemon we should do a new fetch request to the server to get the updated list of pokemon and update the state with the new list of pokemon.
const PokemonProvider = ({ children }) => {
    //1. set useState to determine the data you want to export into the pokemon context object. Right now, our default state piece value is the object full of pokemon objects above, starterPokemon.
    const [allPokemon, setAllPokemon] = useState([]);
// you should have the error state piece initialized here as well
    // const [error, setError] = useState(null)

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        //setting our fetching hof that calls our fetch function from utils 
        const initData = async () => {
            //destructuring the return value of our fetch function response to use in this higher order fetch function
            const [data, error] = await handleFetch("http://localhost:4000/pokemon")
            console.log(data)
            //if there's data, feed it to the setter function we initialized above. error will remain as null
            if (data) setAllPokemon(data)
            //if there's an error, set the error variable. data will remain as null
            if (error) setError(error)// this is a state piece we haven't initialized yet
        };

        //immediately calling the fetch function
        initData();

    }, []) //we only want the fetch to be made on the initial component render. With context, we'd be making this fetch request and distributing it all over the app.

    console.log(allPokemon)
    // TODO: Add values (state pieces that we first set in this context provider component) to be included in the context here
    let contextValues = { allPokemon, setAllPokemon }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
            {children}
        </PokemonContext.Provider>

    )
}

export default PokemonProvider;