import { useState } from "react"

const FormField = (props) => {
    const [ labelClass, setLabelClass ] = useState (props.class)

    


    return(

        <div className="form-field">
            <label htmlFor="" className= { labelClass } >
                    { props.label  } 
                <input type={ props.type } placeholder={ props.pholder } maxLength={ props.maxlength } cols = { props.cols } rows = { props.rows }/>
            </label>

        </div>
    )
}

export default FormField