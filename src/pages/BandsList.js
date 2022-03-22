import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"
import GoTopBtn from "../components/GoTopBtn"

const Musicians = (props) => {
    const [musicians, setMusicians] = useState(null)

    const url = "http://localhost:5000/api/band"

    const { data, isLoading, error } = useFetch(url)

    return(
        <div className={`${props.class}`}>
            <h1>Musicians</h1>
            {
              data &&  data.map((musician) => (
                    <MusicianCard bandName = { musician.bandName } fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } socialLink = { musician.socialLink }  key = { musician.id }/>
                ))
            }
          <GoTopBtn />
        </div>
    )
}

export default Musicians