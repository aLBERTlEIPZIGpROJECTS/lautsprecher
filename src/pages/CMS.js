const CMS = () => {
    return(
        <div className="cms">
            <h1>CMS</h1>
            {/* VER TODA LA INFO */}
            <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#musicians">Musicians</a>
                    <a href="#bands">Bands</a>
                    <a href="#team-members">Team Members</a>
                    <a href="#actual-articles">Actual Articles</a>
                    <a href="#history-articles">History Articles</a>
                    <a href="#music-business">Music Business</a>
                    <a href="#veranstaltungsorte">Veranstaltungsorte</a>
                </div>
            </div>

            {/* SHOW ALL ARTICLE */}

            

            {/* EDITAR LA INFO MOSTRADA */}
        </div>
    )
}

export default CMS