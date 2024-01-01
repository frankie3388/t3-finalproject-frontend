import { createContext, useState } from "react";

// Creating a context for API-related data
export const ApiContext = createContext(null)

// Functional component definition for ApiProvider
export default function ApiProvider({children}){

    // State to manage the API URL
	// const [apiUrl, setApiUrl] = useState("https://travelling-diary-app-e5215403a509.herokuapp.com");
	const [apiUrl, setApiUrl] = useState("http://localhost:5000");

	// Return the ApiContext.Provider with the provided API data
	return (
        <ApiContext.Provider value={
			{
				api: apiUrl, 
				setApi: setApiUrl
			}
		}>
            {children}
		</ApiContext.Provider>
	)

}