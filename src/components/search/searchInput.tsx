import './styles/searchInput.css';

interface Params{
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
}

const SearchInput = ({searchQuery, setSearchQuery}:Params) => {

    return (
        <div className={"search-input-container"}>
            <input className={"search-input"} type={"text"} placeholder={"Search..."} value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
    )
}
export default SearchInput;