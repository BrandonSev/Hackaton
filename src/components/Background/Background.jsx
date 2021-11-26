import React, { useContext, useState } from "react";
import ArtistContext from "../../context/ArtistContext";

const BackgroundImage = () => {
  const { musicGenre } = useContext(ArtistContext);
  const [background, setBackground] = useState("");

  if (musicGenre.includes('Pop') || musicGenre.includes('Australia')) {
    setBackground("/image/Rock.jpg")
  }
  return(
      <div>
          <img src={background} alt="" />
      </div>
  )
};

export default BackgroundImage;
