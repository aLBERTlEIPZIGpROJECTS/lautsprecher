import OtherCard from "../components/OtherCard"
import { useState, useEffect } from "react"

const OtherTab = (props) => {
    const [places, setPlaces] = useState(null)

    useEffect(() => {
      fetch("http://localhost:8000/veranstaltungsorte")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setPlaces(data)
        })
    })

    return(
      <div className= {`${ props.class}`} >
            {
              places &&  places.map((place) => (
                    <OtherCard name = { place.name } address = {place.address} phone = { place.phone } site = { place.site } fb = { place.fb } tw = { place.tw } ig = { place.ig } mail = { place.mail } key = { place.id }/>
                ))
            }
        </div>
    )
}

export default OtherTab