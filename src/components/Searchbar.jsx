import "../styling/Searchbar.css"
import { useState } from "react"
import { useNavigate } from "react-router";

// Functional component for Searchbar. This is reponsible for redirecting
// the user to the bloglist by username or bloglist by location page
// based on the search parameters.
function Searchbar() {

    // State to manage the input value in the search bar
    const [input, setInput] = useState();

    const navigate = useNavigate()

    // Function to handle form submission
	const handleSubmit = (event) => {
		console.log(input);

        // Check if the input starts with "@" to determine if it's a username
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