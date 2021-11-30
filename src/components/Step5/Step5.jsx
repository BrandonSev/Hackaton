import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";

function Step5() {
  const { musicMatchApiKey, albumId, step, setStep, setSongTitle } =
    useContext(ArtistContext);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${albumId}&page=1&page_size=100&apikey=${musicMatchApiKey}`
      )
      .then((res4) => {
        setTracks(
          res4.data.message.body.track_list[0]
            ? res4.data.message.body.track_list
            : ""
        );
      });
  }, [albumId]);

  return (
    <div>
      <div className="d-flex  justify-content-between mt-4">
        <Button value="Back" handleClick={() => setStep(step - 1)} />
      </div>
      <div className="mt-4">
        {tracks.map((track) => (
          <p
            className="d-flex align-items-center justify-content-center text-white p-2"
            style={{
              padding: "1rem",
              border: "1Px solid grey",
              borderRadius: "10px",
              boxShadow: "10px 10px 5px #acacac80",
            }}
            onClick={() => {
              setSongTitle(track.track.track_name);
              setStep(1);
            }}
          >
            {track.track.track_name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Step5;
