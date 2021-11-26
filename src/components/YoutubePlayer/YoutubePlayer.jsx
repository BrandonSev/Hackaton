/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import ArtistContext from "../../context/ArtistContext";
import Button from "../Button/Button";
import "./YoutubePlayer.css";

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
      <div className="youtube-widget-title-container">
        <Button
          value="Let's LISTEN"
          handleClick={handleSetHideKaraoke}
          className={`${
            hideOfficial
              ? "youtube-widget-title-sing-it hide"
              : "youtube-widget-title-sing-it"
          }`}
        ></Button>
        <Button
          value="Let's Sing IT"
          className={`${
            hideKaraoke
              ? "youtube-widget-title-sing-it hide"
              : "youtube-widget-title-sing-it"
          }`}
          handleClick={handleSetHideOfficial}
        ></Button>
      </div>
      <div className="youtube-video-container mt-3">
        <div
          className={
            hideOfficial
              ? "youtube-widget-listen-it hide"
              : `youtube-widget-listen-it ${hideKaraoke ? "spread" : ""}`
          }
        >
          <ReactPlayer
            url={songOfficial}
            controls
            height="100%"
            width="100%"
            className="youtube-widget-listen-it-video"
          />
        </div>
        <div
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
