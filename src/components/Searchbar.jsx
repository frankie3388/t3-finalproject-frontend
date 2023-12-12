import "../styling/Searchbar.css"
import { useState } from "react"
import { useNavigate } from "react-router";

function Searchbar() {

    const [input, setInput] = useState();

    const navigate = useNavigate()

	const handleSubmit = (event) => {
		console.log(input);
        navigate('/bloglist/location/' + input)
	}

    return (
        <div className="searchbar-container">
            
            <input 
                placeholder="Search blogs by username or location" 
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