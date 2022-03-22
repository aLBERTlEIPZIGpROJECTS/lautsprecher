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
              name={place.name}
              address={place.address}
              phone={place.phone}
              site={place.site}
              fb={place.fb}
              tw={place.tw}
              ig={place.ig}
              mail={place.mail}
              img={place.img}
              key={place.id}
            />
          ))}
    </div>
  );
};

export default VeranstaltungsorteTab;
