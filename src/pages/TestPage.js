import { useState, useEffect  } from "react"
import useFetch from "../useFetch"

const TestPage = () => {

    const url = "http://localhost:5000/api/musician"

    const { data, isLoading, error } = useFetch(url)

    return(
        <>
         <p>Hello</p>
         { data && data.map( (item) => (
             <p>{item.fname}</p>
         ))}
        </>
    )
}

export default TestPage