import MusicianCard from "../components/MusicianCard"

const Musicians = () => {
    return(
        <div className="musicians">
            <h1>Musicians</h1>
            <MusicianCard fname = "Karl" lname = "Cox" instrument = "Sax" style = "Blues"  />
            <MusicianCard fname = "Boris" lname = "Brejcha" instrument = "Geige" style = "Ancient Music"  />
            <MusicianCard fname = "Ann" lname = "Clue" instrument = "Recorder" style = "Death Metal"  />
            <MusicianCard fname = "Amelie" lname = "Lens" instrument = "Piano" style = "Schlager"  />
            <MusicianCard fname = "Nina" lname = "Kravitz" instrument = "Harp" style = "Meditation"  />
            <MusicianCard fname = "Claptone" lname = "" instrument = "Didjeridoo" style = "Contemporary"  />
        </div>
    )
}

export default Musicians