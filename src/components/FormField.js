const FormField = (props) => {
    return(
        <div className="form-field">
            <label htmlFor=""> { props.label }
                <input type={ props.type } className= { props.class } placeholder={ props.pholder } />
            </label>
        </div>
    )
}

export default FormField