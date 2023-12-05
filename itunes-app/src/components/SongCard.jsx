import '../App.css';

const SongCard = ({song}) => {
    return (
        <div className="song-card">
            <span>Artist name: {song.artist}</span>
            <span>Song name: {song.song}</span>
            <span>Album name: {song.album}</span>
            <img src={song.artwork} alt='album artwork'/>
        </div>
    )
}

export default SongCard;