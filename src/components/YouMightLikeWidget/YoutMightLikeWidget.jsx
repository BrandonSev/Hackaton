/* eslint-disable no-debugger */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArtistContext from "../../context/ArtistContext";

const YouMightLikeWidget = ({ mightLikeArtistName }) => {
  const { setArtistName, setSongTitle } = useContext(ArtistContext);
  const musicMatchApiKey = "ea098be9293d63cd8b14eae183a5d84e";
  // const musicMatchApiKey = ""; // apipeter ="a0476d8d1a95cb24fc8e9944ebbd4180"
  const [thumbnailSource, setThumbnailSource] = useState("");
  const [newArtistId, setNewArtistId] = useState("");
  const [newArtistAlbumId, setNewArtistAlbumId] = useState("");
  const [newTrack, setNewTrack] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://www.theaudiodb.com/api/v1/json/1/search.php?s=${mightLikeArtistName}`
        )
        .then(async (res) => {
          // console.log("1ere requete axios");
          setThumbnailSource(
            res.data.artists && res.data.artists[0].strArtistThumb !== null
              ? res.data.artists[0].strArtistThumb
              : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
          );
        });
    };
    fetchData();
  }, [mightLikeArtistName]);

  useEffect(() => {
    if (thumbnailSource)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${mightLikeArtistName}&page_size=1&apikey=${musicMatchApiKey}`
        )
        .then(async (res2) => {
          console.log("2eme requete axios", res2);
          setNewArtistId(
            res2.data.message.body.artist_list[0]
              ? res2.data.message.body.artist_list[0].artist.artist_id
              : ""
          );
        });
  }, [thumbnailSource]);

  useEffect(() => {
    if (newArtistId)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${newArtistId}&s_release_date=des&g_album_name=1&apikey=${musicMatchApiKey}`
        )
        .then(async (res3) => {
          console.log("3eme requete axios", res3.data);
          setNewArtistAlbumId(
            res3.data.message.body.album_list[0]
              ? res3.data.message.body.album_list[0].album.album_id
              : ""
          );
        });
  }, [newArtistId]);

  useEffect(() => {
    if (newArtistAlbumId)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${newArtistAlbumId}&page=1&page_size=2&apikey=${musicMatchApiKey}`
        )
        .then((res4) => {
          console.log("4eme requete axios", res4.data);
          setNewTrack(
            res4.data.message.body
              ? res4.data.message.body.track_list[0].track.track_name
              : ""
          );
        });
  }, [newArtistAlbumId]);
  // function that redo the result search

  const newSearch = () => {
    setArtistName(mightLikeArtistName);
    setSongTitle(newTrack);
  };

  return (
    <>
      <Link
        to="/result"
        className="d-flex justify-content-between w-100 mt-4"
        onClick={newSearch}
      >
        <div className="d-flex justify-content-between border w-100 align-items-center">
          <h3 className="you-might-like-widget-title-text pl-4">
            Track: {newTrack}
            <br />
            Artist: {mightLikeArtistName}
          </h3>
          <div className="you-might-like-widget-photo-container">
            <img
              src={thumbnailSource}
              alt="artist"
              className="you-might-like-widget-photo-content"
              style={{ width: "100%", maxWidth: "100%", height: "100px" }}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default YouMightLikeWidget;
