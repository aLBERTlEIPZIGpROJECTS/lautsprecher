import { useState } from "react";
import OtherCard from "../components/OtherCard";
import useFetch from "../useFetch";

const VeranstaltungsorteTab = (props) => {
  const url = "http://localhost:5000/api/veranstaltungsort";
  const { data, isLoading, error } = useFetch(url);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="veranstaltungsorte-tab">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {data &&
        data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return;
            }
          })
          .map((place) => (
            <OtherCard
            street={place.street}
            number={place.number}
            PLZ={place.PLZ}
            concerts={place.concerts}
            image={place.image}
            inhaber={place.inhaber}
            mail={place.mail}
            phone={place.phone}
            placeName={place.name}
            socialMedia = {place.socialMedia}
            website={place.website}
            />
          ))}
    </div>
  );
};

export default VeranstaltungsorteTab;
