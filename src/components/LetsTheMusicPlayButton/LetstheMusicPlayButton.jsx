import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";

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
    <Button
      value="Let the music Play"
      handleClick={handleClick}
      className={"btn btn-light btn-sm mt-2"}
    ></Button>
  );
};

export default LetTheMusicPlayButton;
