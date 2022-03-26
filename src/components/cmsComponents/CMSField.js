const CMSField = (props) => {
    return(
        <div className="cms__field">
            <p>{props.content}</p>
            <button className="cms__edit-btn">edit</button>
        </div>
    )
}

export default CMSField