import Button from "../components/Button"
import FormField from "../components/FormField"
import ArrowRight from "../materials/icons/arrow-right.png"
import Blob from "../components/Blob"
import { useState } from "react"

const Contact = () => {

    const [ display2FieldGroup, setDisplay2FieldGroup ] = useState("hidden-field")
    const [ display3FieldGroup, setDisplay3FieldGroup ] = useState("hidden-field")
    const [ display4FieldGroup, setDisplay4FieldGroup ] = useState("hidden-field")
    const [ display5FieldGroup, setDisplay5FieldGroup ] = useState("hidden-field")
    const [ contactInteraction, setContactInteraction ] = useState("Hi, nice to meet you!")


    function show2Group () {
        setDisplay2FieldGroup("show-field")
        setContactInteraction("let us an email or phone to keep in touch")
    }
    function show3Group () {
        setDisplay3FieldGroup("show-field")
        setContactInteraction("let us an email or phone to keep in touch")
    }
    function show4Group () {
        setDisplay4FieldGroup("show-field")
        setContactInteraction("let us an email or phone to keep in touch")
    }
    function show5Group () {
        setDisplay5FieldGroup("show-field")
        setContactInteraction("let us an email or phone to keep in touch")
    }



    return(
        <div className="contact">
            <Blob class = "blob__lightgreen"/>
            <h1>Contact</h1>
            
            <div className="form-container">

            <form action="">
                {/* First Field Group */}
                <FormField pholder = "First Name" type = "text" border = "true" class="label-shadow" maxlength="30" required/> 
                <FormField pholder = "Last Name"  type = "text"  border = "true" class="label-shadow" maxlength="30" required/>
                
                <div className= {display2FieldGroup}>
                    <FormField pholder = "Mail"  type = "mail"  border = "true" class="label-shadow" maxlength="30"/> 
                    <FormField pholder = "Phone"  type = "phone"  border = "true" class="label-shadow" maxlength="30"/> 
                </div>
                
                <div className= {display3FieldGroup}>
                    <FormField pholder = "Message" type = "text"  border = "true" class = "txt-field" maxlength="1000"  cols="50" rows="6"/>
                </div>

                <div className={display4FieldGroup}>
                    <FormField label = "I want to subscribe"  type = "checkbox" />
                    <Button txt = "Send"  linkName = "send" className = "button__orange button__send" />
                </div>                

                <div className={display5FieldGroup}>
                    <div className="contact-option__container">
                        <div className="contact-option">
                            <p className="contact-option__txt">Bist Du Musiker?</p>
                            <img src={ ArrowRight } alt="" className="iconSmall"/>
                        </div>
                        <div className="contact-option">
                            <p className="contact-option__txt">Bist Du Veranstalter?</p>
                            <img src={ ArrowRight } alt="" className="iconSmall"/>
                        </div>
                    </div>
                </div>

                <div className="user-interaction">
                    <p>{contactInteraction}</p>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact