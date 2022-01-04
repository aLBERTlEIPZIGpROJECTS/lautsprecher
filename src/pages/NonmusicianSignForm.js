import Button from "../components/Button"
import FormField from "../components/FormField"

const NonMusicianSignForm = () => {
    return(
        <div className="contact">
            
            <h1>Sign Form for "Non-Musicians"</h1>
            <form action="">
                <FormField /> {/* Company Name */}
                <FormField /> {/* Inhaber Vorname */}
                <FormField /> {/* Inhaber Nachname */}
                <FormField /> {/* Activity */}
                <FormField /> {/* Company Mail */}
                <FormField /> {/* Company Phone */}
                <FormField /> {/* Webs and Social Media */}
                <FormField /> {/* Profile Image */}
                <FormField /> {/* Txt About you */}
                <FormField /> {/* Subscribe to newsletter */}
                <Button /> {/* senden */}
            </form>
        </div>
)}

export default NonMusicianSignForm