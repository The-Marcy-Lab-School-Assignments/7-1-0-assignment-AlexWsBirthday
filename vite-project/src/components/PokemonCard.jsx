// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react" // import useState

//import the props set in the pokemon collection component
const PokemonCard = ({ name, hp = 0, imgFront, imgBack }) => {
    //creating state pieces to help flip the image (the image source, the setter function that changes the image source when clicked)
    const [image, setImage] = useState(imgFront) // using the useState hook to track which image prop should be displayed

    console.log(name, hp, imgFront, imgBack)
    //event handler that handles a click on the pokemon card, using the image setter function setImage.
    const handleClick = () => {
        //on the click, if the value of image is imgfront, use the setter function to change image state piece's value (the source of the image from the pokemon object in allPokemon) 
        image === imgFront ? setImage(imgBack) : setImage(imgFront);
    }

    return (
        //onClick attribute points to the handle click function, which flips the image when you click anywhere on the card
        <div className="ui card" onClick={handleClick}>
            <div>
                {/* all the values imported thru the props set in pokemon collection are used here to build out each card. */}
                <div className="image" >
                    {/* src is equal to image, which changes when clicked */}
                    <   img alt="pokemon name" src={image} />
                </div>
                <div className="content">
                    <div className="header">{name ? name[0].toUpperCase() + name.slice(1) : 'unknown'}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard