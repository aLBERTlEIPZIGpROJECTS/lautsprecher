import Button from "../components/Button"
import FormField from "../components/FormField"
import { useState } from "react"

const MusicianSignForm = () => {
    return(
        <div className="contact">
            <h1>Sign Form for Musicians</h1>
            <form action="">
                <FormField label = "Band Name" /> 
                <FormField label = "Musician Reference"  /> 
                <FormField label = "Musician Reference"  /> 
                <FormField label = "Musician Reference"  /> 
                <FormField label = "Mail"  /> 
                <FormField label = "Phone"  /> 
                <FormField label = "Band Site and Social Media"  /> 
                <FormField label = "Image"  /> 
                <FormField label = "About"  /> 
                <FormField label = "I want to subscribe"  />
                {/* <Button txt = "Send" linkName = "send"  /> */}
            </form>
        </div>
)}

export default MusicianSignForm