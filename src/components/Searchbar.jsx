import "../styling/Searchbar.css"
import { useState } from "react"
import { useNavigate } from "react-router";

function Searchbar() {

    const [input, setInput] = useState();

    const navigate = useNavigate()

	const handleSubmit = (event) => {
		console.log(input);

        if (input[0] === "@") {
            // Treat it as a username, the input.substring(1) removes the "@"
            navigate('/bloglist/username/' + input.substring(1));
        } else {
            // Treat it as a location
            navigate('/bloglist/location/' + input);
        }
	}

    return (
        <div className="searchbar-container">
            
            <input 
                placeholder="Search blogs by @username or location" 
                className="searchbar-input"
                type="text"
                name="searchField" 
			    id="searchField"
                onChange={(event) => setInput(event.target.value)}
            />
            <button 
                type="submit"
                onClick={handleSubmit}
            >
                <i  className="fa-solid fa-magnifying-glass"></i>
            </button>
            
        </div>
    )
}

export default Searchbar;