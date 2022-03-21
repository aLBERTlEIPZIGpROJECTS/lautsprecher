import { useState, useEffect  } from "react"
const TestPage = () => {

    const url = "http://localhost:5000/api/musician"

    const [data, setData] = useState(null)


    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

/*     useEffect(() => {
        fetch(url)
            .then( res => {
                return res.json
            })
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url]) */

    return(
        <>
         <p>Hello</p>
        {console.log(data)}
         {/* { data && data.map( (item) => (
             <p>{item.fname}</p>
         ))} */}
        </>
    )
}

export default TestPage