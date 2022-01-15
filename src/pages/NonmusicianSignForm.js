import Button from "../components/Button"
import FormField from "../components/FormField"

const NonMusicianSignForm = () => {
    return(
        <div className="contact">
            
            <h1>Sign Form for "Non-Musicians"</h1>
            <form action="">
                <FormField label = "Company Name" />
                <FormField label = "Inhaber fname" />
                <FormField label = "Inhaber lname" />
                <FormField label = "Activity" />
                <FormField label = "Company Mail" />
                <FormField label = "Company Phone" />
                <FormField label = "Company Site" />
                <FormField label = "Company Social Media" />
                <FormField label = "Company Profile Image" />
                <FormField label = "Company Txt About You" />
                <FormField label = "Subscribe to Newsletter" />
                {/* <Button txt = "Send" linkName = "send"  /> */}
            </form>
        </div>
)}

export default NonMusicianSignForm