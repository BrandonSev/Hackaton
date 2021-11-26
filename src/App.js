import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ArtistContext from "./context/ArtistContext";
import Home from "./pages/Home/Home";

function App() {
  const {
    artistName,
    songTitle,
    setLyrics,
    setOfficialSongId,
    setKaraokeSongId,
    setMightLikeArtistNames,
    toTitleCase,
    setMusicGenre,
    musicMatchApiKey,
    setArtistId,
    artistId
  } = useContext(ArtistContext);

  // youtube api Peter key
  // const apiKeyYoutube = "AIzaSyCwb6wc0KuGSinjA0Ieo7ESJZzKknYpHmc";
  const apiKeyYoutube = "AIzaSyBpcSCzGebZDcHH-JG4-lIre0V7MMSWWuE";
  
  const getOfficialSongId = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q="${artistName} ${songTitle} official"&type=video&key=${apiKeyYoutube}`
      )
      .then((res) => {
        setOfficialSongId(res.data.items[0].id.videoId);
      });
  };

  const getKaraokeSongId = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q="${artistName} ${songTitle} karaoke version lyrics"&type=video&key=${apiKeyYoutube}`
      )
      .then((res) => {
        setKaraokeSongId(res.data.items[0].id.videoId);
      });
  };

  const getLyrics = async () => {
    await axios
      .get(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
      .then((res) => {
        if (res.data.error) {
          setLyrics(res.data.error);
        } else {
          setLyrics(
            res.data.lyrics.replace(
              `Paroles de la chanson ${toTitleCase(
                songTitle
              )} par ${toTitleCase(artistName)}\r`,
              ""
            )
          );
        }
      })
      .catch((err) => {
        console.log(err, "ici");
      });
  };
  // tasteDive(similar) api

  const apiKeyTasteDive = "427359-sprint4-8BPZFW7D";

  const getMightLikeArtistNames = async () => {
    await axios
      .get(
        `https://magical-it-works.jsrover.wilders.dev/https://tastedive.com/api/similar?q=${artistName}&k=${apiKeyTasteDive}&limit=7`
      )
      .then((res) => {
        setMightLikeArtistNames(res.data.Similar.Results);
      });
  };

  // APi call that render the music genre string

  useEffect(() => {
    if (artistName)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${artistName}&page_size=1&apikey=${musicMatchApiKey}`
        )
        .then(async (res2) => {
          setArtistId(
            res2.data.message.body.artist_list[0]
              ? res2.data.message.body.artist_list[0].artist.artist_id
              : ""
          );
        });
  }, [artistName]);

  useEffect(() => {
    if (artistId)
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&s_release_date=asc&g_album_name=1&apikey=${musicMatchApiKey}`
        )
        .then(async (res3) => {
          console.log("3eme requete axios", res3.data);
          setMusicGenre(
            res3.data.message.body.album_list[0]
              ? res3.data.message.body.album_list[0].album.primary_genres.music_genre_list[0].music_genre.music_genre_name
              : ""
          );
        });
  }, [artistId]);

  useEffect(() => {
    // function that send request to APIs
    getLyrics();
    getOfficialSongId();
    getKaraokeSongId();
    getMightLikeArtistNames();
  }, [artistName, songTitle]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
