import { useState } from "react";
import '../App.css';

const SearchBar = ({ handleStoreSearchTerm }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchButton = () => {
        handleStoreSearchTerm(searchTerm);
    };

    return (
        <span className="search-bar">
            <input value={searchTerm} onChange={handleSearchInput} />
            <button type="button" onClick={handleSearchButton}>Search</button>
        </span>
    )
}

export default SearchBar;