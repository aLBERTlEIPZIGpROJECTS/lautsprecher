import Button from "../components/Button"
import FormField from "../components/FormField"
import ArrowRight from "../materials/icons/arrow-right.png"
import Blob from "../components/Blob"
import GoTopBtn from "../components/GoTopBtn"
import AddFieldButton from "../components/AddFieldButton"

const SignupVeranstaltungsort = () => {
    return(
        <div className="signup">
            <Blob class = "blob__lightgreen blob-high"/>
            <h1>Signup Veranstaltungsort</h1>
            
            <div className="form-container">

            <form action="">
                {/* First Field Group */}
                <FormField pholder = "Place Name" type = "text" border = "true" class="label-shadow" maxlength="30" required id="userfname" /> 
                <FormField pholder = "First Name" type = "text" border = "true" class="label-shadow" maxlength="30" required id="userfname" /> 
                <FormField pholder = "Last Name"  type = "text"  border = "true" class="label-shadow" maxlength="30" required id="userlname" />
                <FormField pholder = "Adress"  type = "text"  border = "true" class="label-shadow" maxlength="30" required id="userlname" />
                <div className= "show-field">
                    <FormField pholder = "Mail"  type = "mail"  border = "true" class="label-shadow" maxlength="30"/> 
                    <FormField pholder = "Phone"  type = "phone"  border = "true" class="label-shadow" maxlength="30"/> 
                    <FormField pholder = "Web"  type = "web"  border = "true" class="label-shadow" maxlength="30"/> 
                    <FormField pholder = "Social Media"  type = "socialMedia"  border = "true" class="label-shadow" maxlength="30"/> 
                    <AddFieldButton/>
                </div>
                <FormField pholder = "Image"  type = "image"  border = "true" class="label-shadow" maxlength="30" required id="userlname" />
            </form>
            </div>
            <GoTopBtn />
            
        </div>
    )
}

export default SignupVeranstaltungsort