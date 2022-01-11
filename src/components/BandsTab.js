import { useState, useEffect } from "react"
import BandCard from "../components/BandCard"

const BandsTab = () => {
    const [bands, setBands] = useState(null)

    useEffect(() => {
      fetch("http://localhost:8000/bands")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setBands(data)
        })
    })

    return(
        <div className="musicians">
            <h1>Bands</h1>
            {
              bands &&  bands.map((musician) => (
                    <BandCard bandName = { musician.bandName } style = { musician.style} mail = { musician.mail } phone = { musician.phone } site = { musician.site } member = { musician.member } infos = { musician.infos }  key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default BandsTab