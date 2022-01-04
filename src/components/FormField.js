const FormField = (props) => {
    return(
        <div className="form-field">
            <label htmlFor="">{ props.label }
                <input type="text" />
            </label>
        </div>
    )
}

export default FormField