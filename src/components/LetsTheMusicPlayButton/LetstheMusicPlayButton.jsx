import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArtistContext from "../../context/ArtistContext";

const LetTheMusicPlayButton = () => {
  const {
    setArtistName,
    setSongTitle,
    setFirstValueSongTitle,
    setFirstValueArtistName,
    firstValueSongTitle,
    firstValueArtistName,
    step,
    setStep,
  } = useContext(ArtistContext);

  const handleClick = () => {
    setArtistName(firstValueArtistName);
    setSongTitle(firstValueSongTitle);
    setFirstValueSongTitle("");
    setFirstValueArtistName("");
    setStep(step + 1);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-primary btn-lg"
    >
      Let the music play
    </button>
  );
};

export default LetTheMusicPlayButton;
