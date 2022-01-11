import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"

const CommunityTab = (props) => {
    const [persons, setPersons] = useState(null)

    useEffect(() => {
      fetch( props.url )
        .then(res => {
          return res.json()
        })
        .then(data => {
          setPersons(data)
        })
    }, [])

    return(
        <div className="musicians">
            <h1>{ props.title }</h1>
            {
                persons && persons.map((person) => (
                    <p key = { person.id }>{ person.fname }</p>
                ))
            }
        </div>
    )
}

export default CommunityTab