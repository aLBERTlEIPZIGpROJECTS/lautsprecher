import Button from "../components/Button"
import FormField from "../components/FormField"
import ArrowRight from "../materials/icons/arrow-right.png"

const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <form action="">
                <FormField pholder = "First Name" type = "text" border = "true"/> 
                <FormField pholder = "Last Name"  type = "text"  border = "true"/>
                <FormField pholder = "Mail"  type = "mail"  border = "true"/> 
                <FormField pholder = "Phone"  type = "phone"  border = "true"/> 
                <FormField pholder = "Message" type = "text"  border = "true" class = "txt-field"/>
                <div className="contact-option">
                    <p>Bist Du Musiker?</p>
                    <img src={ ArrowRight } alt="" className="iconSmall"/>
                </div>
                <div className="contact-option">
                    <p>Bist Du Veranstalter?</p>
                    <img src={ ArrowRight } alt="" className="iconSmall"/>
                </div>
                <FormField label = "I want to subscribe"  type = "checkbox" />
                <Button txt = "Send"  linkName = "send" className = "bg-orange" />
            </form>
        </div>
    )
}

export default Contact