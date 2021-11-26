import React, { useContext } from "react";
import ArtistContext from "../../context/ArtistContext";

const getBackgroundImage = () => {

    const{ musicGenre } = useContext(ArtistContext);
    const background =""; 

    if (musicGenre.contains("rock")) {
        console.log("plop")}
    return(
        <div>
            <img src={background} alt="background" />
        </div>
    )
    }


export default getBackgroundImage;