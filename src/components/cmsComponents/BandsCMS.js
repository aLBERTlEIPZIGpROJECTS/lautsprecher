import { useState } from "react";
import useFetch from "../../useFetch.js";
import CardCMS from "./CardCMS.js";

const BandsCMS = (props) => {
  const url = "http://localhost:5000/api/band";

  const { data, isLoading, error } = useFetch(url);

  return (
    <div className="cms__content">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      <h1>All Bands</h1>
      {data &&
        data.map((band) => (
          <CardCMS
            approved={band.approved}
            bandName={band.bandName}
            id={band.id}
            key={band.id}
            concerts={band.concerts}
            image={band.image}
            mail={band.mail}
            /* musicians={band.musicians} */
            fb={band.fb}
            ig={band.ig}
            tw={band.tw}
            sc={band.sc}
            yt={band.yt}
            in={band.in}
            twitch={band.twitch}
            style={band.style}
            vorsitzender = {band.vorsitzender}
            website={band.website}
          />
        ))}
    </div>
  );
};

export default BandsCMS;
