import React, { useContext } from "react";
import ArtistContext from "../../context/ArtistContext";

function InputField() {
  const {
    setFirstValueArtistName,
    setFirstValueSongTitle,
    firstValueArtistName,
    firstValueSongTitle,
  } = useContext(ArtistContext);

  return (
    <>
      <div class="form-group text-center">
        <label for="exampleInputEmail1" className="font-weight-medium">
          Fill with the Singer
        </label>
        <input
          type="singer"
          class="form-control py-4 text-center"
          id="exampleInputEmail1"
          value={firstValueArtistName}
          onChange={(e) => setFirstValueArtistName(e.target.value)}
        />
      </div>
      <div class="form-group text-center">
        <label for="exampleInputEmail1" className="font-weight-medium">
          Fill with the Song
        </label>
        <input
          type="singer"
          class="form-control py-4 text-center"
          id="exampleInputEmail1"
          value={firstValueSongTitle}
          onChange={(e) => setFirstValueSongTitle(e.target.value)}
        />
      </div>
    </>
  );
}

export default InputField;
