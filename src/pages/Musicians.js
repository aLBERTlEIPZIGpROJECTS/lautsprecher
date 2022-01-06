import MusicianCard from "../components/MusicianCard"
import { useState } from "react"

const Musicians = () => {
    const [musicians, setMusicians] = useState([

    {
        id: 0,
        fname : "Robin",
        lname : "Nora",
        instrument : ["Guitar", "Gesang"],
        style : "Songwriter",
        mail : "mail@rnora.com",
        phone: "",
        socialLink: "nora.com@rnora"
      },
      {
          id: 1,
          fname : "Jenna",
          lname : "Sans Souci",
          instrument : ["Gesang", "Kontrabass"],
          style : "ghoul@ghoul.de",
          mail : "mail@rnora.com",
          phone: "0123456789",
          socialLink: "@ghoul"
        },
      {
        id: 2,
        fname : "Felix",
        lname : "Hammerstein",
        style : ["Songwriter", "Chanson Française"],
        mail : "mail@hammerstein.de",
        phone: "0123 456789",
        socialLink: "@fhchanson"
      }
    ])

    return(
        <div className="musicians">
            <h1>Musicians</h1>

            {
                musicians.map((musician) => (
                    <MusicianCard fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } socialLink = { musician.socialLink }/>
                ))
            }
        </div>
    )
}

export default Musicians