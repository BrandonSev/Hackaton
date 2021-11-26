import React, { useContext, useState } from "react";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";
import YouMightLikeWidget from "../YouMightLikeWidget/YoutMightLikeWidget";

const Step3 = () => {
  const { mightLikeArtistNames, artistName, setMightLikeArtistNames } =
    useContext(ArtistContext);
  const { step, setStep } = useContext(ArtistContext);

  return (
    <div>
      <div className="you-might-like-container mt-4">
        <div className="you-might-like-title-container">
          <h2 className="you-might-like-title text-center">
            You might also LIKE
          </h2>
          <div className="d-flex  justify-content-between mt-4">
            <Button value="Back" handleClick={() => setStep(step - 1)} />
          </div>
        </div>
        {mightLikeArtistNames.map((mightLikeArtistName, i) => (
          <>
            <YouMightLikeWidget
              key={mightLikeArtistName.id}
              mightLikeArtistName={mightLikeArtistName.Name}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Step3;
