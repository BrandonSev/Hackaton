import React, { useContext, useEffect, useState } from "react";
import ArtistContext from "../../context/ArtistContext";
import axios from "axios";

const Step4 = () => {
  const { artistId, musicMatchApiKey } = useContext(ArtistContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (artistId)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&s_release_date=asc&g_album_name=1&apikey=${musicMatchApiKey}`
        )
        .then(async (res3) => {
          setAlbums(
            res3.data.message.body.album_list[0]
              ? res3.data.message.body.album_list
              : ""
          );console.log(albums)
        });
  }, [artistId]);

  return (
    <div>
      {albums.map((album, i)=>(

        <figure>
        <figcaption>Artist:{album.album.artist_name} Name:{album.album.album_name} Release Date:{album.album.album_release_date}</figcaption>
        </figure>
        ))}
          
    </div>
  );
};

export default Step4;