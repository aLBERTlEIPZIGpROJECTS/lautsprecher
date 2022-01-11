import { useState, useEffect } from "react"
import OtherCard from "../components/OtherCard"

const OtherTab = () => {
    const [other, setOther] = useState(null)

    useEffect(() => {
      fetch("http://localhost:8000/veranstaltungsorte")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setOther(data)
        })
    })

    return(
        <div className="musicians">
            <h1>Other</h1>
            {
              other &&  other.map((place) => (
                <OtherCard key = { place.id } name = { place.name } address = { place.address } phone = { place.phone } mail = { place.mail } site = { place.site } />
                    
                ))
            }
        </div>
    )
}

export default OtherTab
