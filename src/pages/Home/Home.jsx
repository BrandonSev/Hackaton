import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import InputField from "../../components/InputField/InputField";
import LetTheMusicPlayButton from "../../components/LetsTheMusicPlayButton/LetstheMusicPlayButton";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import ArtistContext from "../../context/ArtistContext";

function Home() {
  const { step, setStep } = useContext(ArtistContext);
  return (
    <>
      <div style={{ position: "relative" }}></div>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            position: "relative",
            transition: "left .3s ease",
            width: "300%",
            left: step * -100 + "%",
          }}
        >
          <div style={{ width: "100%" }}>
            <Hero />
            <div className="mt-5">
              <InputField />
              <div className="d-flex justify-content-center">
                <LetTheMusicPlayButton />
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>{step === 1 && <Step2 />}</div>
          <div style={{ width: "100%" }}>{step === 2 && <Step3 />}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
