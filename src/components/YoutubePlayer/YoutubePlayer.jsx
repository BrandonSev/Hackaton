/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";

const YoutubePlayer = () => {
  const { officialSongId, karaokeSongId } = useContext(ArtistContext);
  const [hideOfficial, setHideOfficial] = useState(false);
  const handleSetHideOfficial = () => {
    setHideOfficial(!hideOfficial);
  };

  const [hideKaraoke, setHideKaraoke] = useState(false);
  const handleSetHideKaraoke = () => {
    setHideKaraoke(!hideKaraoke);
  };

  const songOfficial = `https://www.youtube.com/embed/${officialSongId}`;
  const songKaraoke = `https://www.youtube.com/embed/${karaokeSongId}`;

  return (
    <div className="youtube-widget-container">
      <div className="d-flex justify-content-around mb-4">
        <Button value="Let's LISTEN" onClick={handleSetHideKaraoke}></Button>
        <Button
          value="Let's Sing IT"
          className="btn btn-primary"
          onClick={handleSetHideOfficial}
        ></Button>
      </div>
      <div className="d-flex justify-content-between bg-secondary p-4">
        <div style={{ width: "47%" }}>
          <ReactPlayer
            url={songOfficial}
            controls
            height="100%"
            width="100%"
            className="youtube-widget-listen-it-video"
          />
        </div>
        <div
          style={{ width: "47%" }}
          className={
            hideKaraoke
              ? "youtube-widget-sing-it hide"
              : `youtube-widget-sing-it ${hideOfficial ? "spread" : ""}`
          }
        >
          <ReactPlayer
            url={songKaraoke}
            controls
            height="100%"
            width="100%"
            className="youtube-widget-sing-it-video"
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
