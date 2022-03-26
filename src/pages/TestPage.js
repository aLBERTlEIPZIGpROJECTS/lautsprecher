import { useState, useEffect  } from "react"
import useFetch from "../useFetch"

const TestPage = () => {

    const [ value, setValue ] = useState(null)

    useEffect(() => {
        
    })

    const url = "http://localhost:5000/api/musician"

    const { data, isLoading, error } = useFetch(url)

    return(
        <>
         <h1>Test</h1>
        </>
    )
}

export default TestPage



 {/* <CardCMS approved = {musician.approved} id = { musician.id } key = { musician.id } fName = {musician.fName} lName = {musician.lName} mail = {musician.mail} bands = {musician.bands} image ={musician.image} instruments = {musician.instruments} style = {musician.style} website = {musician.website} socialMedia = {musician.socialMedia}/> */}