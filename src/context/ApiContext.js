import { createContext, useState } from "react";

// Creating a context for API-related data
export const ApiContext = createContext(null)

// Functional component definition for ApiProvider
export default function ApiProvider({children}){
	// Determine the API URL based on the environment
	const isDevelopment = process.env.NODE_ENV === 'development';
	const defaultApiUrl = isDevelopment
	  ? 'http://localhost:5000' // Replace with your actual local server port
	  : 'https://forked-travelling-diary-a7e4a987a53d.herokuapp.com';

	// State to manage the API URL
	const [apiUrl, setApiUrl] = useState(defaultApiUrl);
	
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