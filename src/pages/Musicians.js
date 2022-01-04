import MusicianCard from "../components/MusicianCard"

const Musicians = () => {
    return(
        <div className="musicians">
            <h1>Musicians</h1>
            <MusicianCard fname = "Karl" lname = "Cox" instrument = "sax" style = "blues"  />
            <MusicianCard />
            <MusicianCard />
            <MusicianCard />
            <MusicianCard />
            <MusicianCard />
        </div>
    )
}

export default Musicians