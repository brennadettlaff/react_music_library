import React, {useState} from "react";

const SearchMusic = (props) => {
    const [searchInput, setSearchInput] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        props.filterSongs(searchInput)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input onChange={(event)=>setSearchInput(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchMusic;