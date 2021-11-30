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
        <h2 className="text-light">
          Let's Sing It{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-mic-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
          </svg>
        </h2>
      </div>
      <div
        className="p-4 text-white"
        style={{
          maxHeight: "50vh",
          overflowY: "scroll",
          border: "1px solid #FFFFFF80",
        }}
      >
        <div className="text-center">
          <h3>
            {toTitleCase(songTitle)}
            <br />
            {artistName.toUpperCase()}
          </h3>
        </div>
        <div>
          <p
            style={{
              whiteSpace: "pre-line",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            {lyrics}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsReadIt;
