import { createContext, useState } from "react";

// Creating a context for API-related data
export const ApiContext = createContext(null)

// Functional component definition for ApiProvider
export default function ApiProvider({children}){

    // State to manage the API URL
	const [apiUrl, setApiUrl] = useState("https://forked-travelling-diary-a7e4a987a53d.herokuapp.com");

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