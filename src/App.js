import axios from "axios";
import { useContext, useEffect } from "react";
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
