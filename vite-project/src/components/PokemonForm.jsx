import { useState } from "react"


const PokemonForm = () => {
    //useState hook creating new state pieces, which will hold all the properties necessary to render a new pokemon when requested
    const [newPokemonName, setNewPokemonName] = useState('');
    const [newPokemonHp, setNewPokemonHp] = useState('');
    const [newPokemonFrontImg, setNewPokemonFrontImg] = useState('');
    const [newPokemonBackImg, setNewPokemonBackImg] = useState('');


    //1. set the values that were submitted in the form using the "onChange" function, which will update each time the user presses another key. It will leave the value as it is when the user is done typing.
    //2. init an object that you will submit to the database with all of the new pokemon info
    //3. reset the form's value 


//feedback:
// Ensure the handleSubmit function in PokemonForm updates allPokemon directly upon form submission to re-render immediately.
    //handleSubmit is async because it performs a data exchange (which requires sending out a request to the server)
    const handleSubmit = async (e) => {
        // prevents page refresh on submission 
        e.preventDefault();

        //initializing an object to bring all of the data together into one element after all the values on the form are submitted and thus made the values of the state pieces we initialized above,
        //with the data submitted into the form below. 
        const newPokemon = {
            name: newPokemonName,
            hp: newPokemonHp,
            front: newPokemonFrontImg,
            back: newPokemonBackImg
        }


        try { // try catch on sending data to the Json server
            const response = await fetch('http://localhost:4000/pokemon', { // sending a fetch to the JSON server
                method: 'POST', // fetch option to add to the data in the fetch URL
                headers: {
                    'Content-Type': 'application/json', // lets the server know that the data being sent is in JSON formatting
                },
                body: JSON.stringify(newPokemon), // convert the newPokemon object to be in JSON format before sending the data to the server
            });

            if (response.ok) { // if the request is successful
                const addedPokemon = await response.json(); // Parse the JSON response for adding the new Pokemon
                //resetting the state pieces back to empty 
                setNewPokemonName('');
                setNewPokemonHp('');
                setNewPokemonFrontImg('');
                setNewPokemonBackImg('');
            } else { // else 
                console.error('Failed to add new Pokémon'); // Logs in console that the fetch failed
            }
        } catch (error) {
            console.error('Error:', error); // Logs in console the error from the request
        }
    }



    return (
        <div>
            <h3>Add a Pokemon!</h3>
            {/* handles submission of the form, receives all the information */}
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        {/* Value and onChange are meant to show the change in the state pieces value, to the user as they type in their value. e.target.value === event (keypresses) target (input box) value (what you're typing) */}
                        <input type="text" name="name" placeholder="Name" value={newPokemonName} onChange={(e) => setNewPokemonName(e.target.value)} /> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={newPokemonHp} onChange={(e) => setNewPokemonHp(e.target.value)} /> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={newPokemonFrontImg} onChange={(e) => setNewPokemonFrontImg(e.target.value)} /> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={newPokemonBackImg} onChange={(e) => setNewPokemonBackImg(e.target.value)} /> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm