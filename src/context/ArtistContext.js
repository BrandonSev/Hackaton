import React, { createContext, useState } from "react";

const ArtistContext = createContext();

export const ArtistContextProvider = ({ children }) => {
  const [artistName, setArtistName] = useState("");
  const [albumId, setAlbumId] = useState(null);
  const [step, setStep] = useState(0);
  const [songTitle, setSongTitle] = useState("");
  const [firstValueArtistName, setFirstValueArtistName] = useState("");
  const [firstValueSongTitle, setFirstValueSongTitle] = useState("");
  const handleChangeArtistName = (e) => setFirstValueArtistName(e.target.value);
  const handleChangeSongTitle = (e) => setFirstValueSongTitle(e.target.value);
  const [lyrics, setLyrics] = useState("");
  const [officialSongId, setOfficialSongId] = useState("");
  const [karaokeSongId, setKaraokeSongId] = useState("");
  const [mightLikeArtistNames, setMightLikeArtistNames] = useState([]);
  const [musicGenre, setMusicGenre] = useState("");
  const [artistId, setArtistId] = useState("");
  const musicMatchApiKey = "ea098be9293d63cd8b14eae183a5d84e";

  const setInitialValue = () => {
    setArtistName("");
    setSongTitle("");
    setOfficialSongId("");
    setKaraokeSongId("");
    setLyrics("");
  };

  const toTitleCase = (string) => {
    return string.toLowerCase().replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <ArtistContext.Provider
      value={{
        artistName,
        setArtistName,
        songTitle,
        setSongTitle,
        lyrics,
        setLyrics,
        officialSongId,
        setOfficialSongId,
        karaokeSongId,
        setKaraokeSongId,
        mightLikeArtistNames,
        setMightLikeArtistNames,
        setInitialValue,
        toTitleCase,
        handleChangeArtistName,
        handleChangeSongTitle,
        setFirstValueArtistName,
        setFirstValueSongTitle,
        firstValueArtistName,
        firstValueSongTitle,
        step,
        setStep,
        musicGenre,
        setMusicGenre,
        musicMatchApiKey,
        setArtistId,
        artistId,
        albumId,
        setAlbumId,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContext;
