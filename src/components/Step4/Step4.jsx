import React, { useContext, useEffect, useState } from "react";
import ArtistContext from "../../context/ArtistContext";
import axios from "axios";
import Button from "../Button/Button";
import LogiqueModale from "../Modale/LogiqueModale";

const Step4 = () => {
  const { artistId, musicMatchApiKey, step, setStep, setAlbumId } =
    useContext(ArtistContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (artistId)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&s_release_date=asc&g_album_name=1&page_size=100&apikey=${musicMatchApiKey}`
        )
        .then(async (res3) => {
          setAlbums(
            res3.data.message.body.album_list[0]
              ? res3.data.message.body.album_list
              : ""
          );
        });
  }, [artistId]);

  return (
    <div>
      <div className="d-flex  justify-content-between mt-4">
        <Button value="Back" handleClick={() => setStep(step - 2)} />
      </div>
      {albums.map((album, i) => (
        <figure className="mt-4">
          <figcaption
            className="d-flex align-items-center justify-content-between text-white p-2"
            style={{
              padding: "1rem",
              border: "1Px solid grey",
              borderRadius: "10px",
              boxShadow: "10px 10px 5px #acacac80",
            }}
          >
            Artist:{album.album.artist_name} Name:{album.album.album_name}{" "}
            Release Date:{album.album.album_release_date}
            <Button
              value="See Tracks"
              handleClick={() => {
                setAlbumId(album.album.album_id);
                setStep(step + 1);
              }}
            ></Button>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Step4;
