import Button from "../components/Button"
import FormField from "../components/FormField"

const MusicianSignForm = () => {
    return(
        <div className="contact">
            <h1>Sign Form for Musicians</h1>
            <form action="">
                <FormField /> {/* Band Name */}
                <FormField /> {/* Musician 1, 2, 3, ... Vorname */}
                <FormField /> {/* Musician 1, 2, 3, ... Nachname */}
                <FormField /> {/* Musician 1, 2, 3, ... Instrument */}
                <FormField /> {/* Band Mail */}
                <FormField /> {/* Band Phone */}
                <FormField /> {/* Band Site / Social Media */}
                <FormField /> {/* Image */}
                <FormField /> {/* About you */}
                <FormField /> {/* I want to subscribe */}
                <Button /> {/* Send */}
            </form>
        </div>
)}

export default MusicianSignForm