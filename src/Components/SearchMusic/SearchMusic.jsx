import React, {useState} from "react";

const SearchMusic = (props) => {
    const [searchInput, setSearchInput] = useState("")
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input onChange={(event)=>setSearchInput(event.target.value)}/>
            </form>
        </div>
     );
}
 
export default SearchMusic;