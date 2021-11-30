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
    <div>
      <div className="d-flex justify-content-center">
        <div class="form-group text-center">
          <label for="exampleInputEmail1" className="font-weight-medium">
            Enter the Singer
          </label>
          <input
            type="text"
            name="singer"
            class="form-control py-4 text-center"
            id="exampleInputEmail1"
            value={firstValueArtistName}
            onChange={(e) => setFirstValueArtistName(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div class="form-group text-center">
          <label for="exampleInputEmail1" className="font-weight-medium">
            Enter the Song
          </label>
          <input
            type="text"
            name="song"
            class="form-control py-4 text-center"
            id="exampleInputEmail1"
            value={firstValueSongTitle}
            onChange={(e) => setFirstValueSongTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;
