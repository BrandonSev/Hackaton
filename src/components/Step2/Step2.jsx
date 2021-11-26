import React, { useContext, useEffect, useState } from "react";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";
import Lyrics from "../Lyrics/Lyrics";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";

function Step2() {
  const { step, setStep } = useContext(ArtistContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  const handleClick = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div style={{ width: "100%", padding: "2rem" }}>
        {loading ? (
          <div className="text-center">
            <p>Chargement...</p>
          </div>
        ) : (
          <div className="mt-5">
            <div className="text-center">
              <YoutubePlayer />
            </div>
            <Lyrics />
            <div className="d-flex  justify-content-between mt-4">
              <Button value="Back" handleClick={handleClick} />
              <Button value="Also Like" handleClick={() => setStep(step + 1)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Step2;
