const FormField = (props) => {
    return(
        <div className="form-field">
            <label htmlFor="" className= { props.class } >
                    { props.label  } 
                <input type={ props.type } placeholder={ props.pholder } maxLength={ props.maxlength } cols = { props.cols } rows = { props.rows } />
            </label>

        </div>
    )
}

export default FormField