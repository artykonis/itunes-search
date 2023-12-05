import './App.css';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from "react";
import SongCard from './components/SongCard';
import ClearButton from './components/ClearButton';
import fetchItunesData from './operations/itunesApi';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleStoreSearchTerm = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleClearResults = () => {
    setSearchResults([]);
    setSearch('');
  };

  useEffect(() => {
    if (search) {
      const fetchSongs = async () => {
        const songs = await fetchItunesData(search);
        setSearchResults(songs);
      };

      fetchSongs();
    }
  }, [search])

  return (
    <div>
      <div className='search-container'>
        <SearchBar handleStoreSearchTerm={handleStoreSearchTerm} />
        {searchResults.length > 0 &&
          <ClearButton handleButtonClick={handleClearResults} buttonText='Clear results'/>
        }
      </div>
      <div className='card-container'>
        {
          searchResults.length > 0 &&
          searchResults.map((song) => (
            <SongCard song={song} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
