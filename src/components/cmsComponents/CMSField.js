const CMSField = (props) => {
    return(
        <div className="cms-field">
            <p>{props.content}</p>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default CMSField