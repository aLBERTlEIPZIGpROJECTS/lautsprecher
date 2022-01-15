import Button from "../components/Button"
import FormField from "../components/FormField"
import ArrowRight from "../materials/icons/arrow-right.png"
import Blob from "../components/Blob"

const Contact = () => {
    return(
        <div className="contact">
            <Blob class = "blob__lightgreen"/>
            <h1>Contact</h1>
            <form action="">
                <FormField pholder = "First Name" type = "text" border = "true" class="label-shadow" maxlength="30"/> 
                <FormField pholder = "Last Name"  type = "text"  border = "true" class="label-shadow" maxlength="30"/>
                <FormField pholder = "Mail"  type = "mail"  border = "true" class="label-shadow" maxlength="30"/> 
                <FormField pholder = "Phone"  type = "phone"  border = "true" class="label-shadow" maxlength="30"/> 
                <FormField pholder = "Message" type = "text"  border = "true" class = "txt-field" maxlength="1000"  cols="50" rows="6"/>
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
                <FormField label = "I want to subscribe"  type = "checkbox" />
               {/*  <Button txt = "Send"  linkName = "send" className = "button__orange button__send" /> */}
            </form>
        </div>
    )
}

export default Contact