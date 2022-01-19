import { useParams } from "react-router-dom"
import Button from "../components/Button"
import useFetch from "../useFetch"
import Blob from "../components/Blob"
import phone from "../materials/icons/binoculars-thin.svg"
import mail from "../materials/icons/mailIcon.svg"
import site from "../materials/icons/binoculars-thin.svg"
import twitter from "../materials/icons/twIcon.svg"
import facebook from "../materials/icons/fbIcon.svg"
import instagram from "../materials/icons/igIcon.svg"
import soundcloud from "../materials/icons/arrow-up.svg"


const CommunityInfo = ( props ) => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`{props.url}/${id}`)

    return(
        <div className="single-musician">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-high" />

            {
                data && (
                <h1>Hello</h1>
                )
            }
        </div>
    )
}

export default CommunityInfo