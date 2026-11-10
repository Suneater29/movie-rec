function SearchBar({value,onChange}){
    return(
        <input
        className="home-search" 
        type="search"
        placeholder="search movies"
        value={value}
        onChange={(event)=>onChange(event.target.value)}
        />
    );
}

export default SearchBar;