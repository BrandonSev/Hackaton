import React, { useContext, useState } from "react";
import ArtistContext from "../../context/ArtistContext";

const LetsReadIt = () => {
  const { artistName, songTitle, lyrics, toTitleCase } =
    useContext(ArtistContext);
  const [down, setDown] = useState(false);

  const handleSetDown = () => {
    setDown(!down);
  };

  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-primary">Let's Sing It</h2>
      </div>
      <div
        className="border p-4"
        style={{ maxHeight: "50vh", overflowX: "scroll" }}
      >
        <div className="text-center">
          <h3>
            {toTitleCase(songTitle)}
            <br />
            {artistName.toUpperCase()}
          </h3>
        </div>
        <div>
          <p style={{ whiteSpace: "pre-line" }}>{lyrics}</p>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" onClick={handleSetDown}>
            {down ? "^" : "v"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetsReadIt;
