const fetchItunesData = async (search) => {
    const url = `https://itunes.apple.com/search?term=${search}`;
    const itunesData = await fetch(url);
    const itunesObjects = await itunesData.json();
    const filteredObjects = itunesObjects.results
        .filter((obj) => obj.kind === 'song')
        .map((song) => ({
            artist: song.artistName,
            song: song.trackName,
            album: song.collectionName,
            artwork: song.artworkUrl100,
        }));
    return filteredObjects;
};

export default fetchItunesData;