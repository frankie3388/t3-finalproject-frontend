import { createContext, useState } from "react";


export const ApiContext = createContext(null)

export default function ApiProvider({children}){

    // Will have to change this URL to our API after setting up backend
	const [apiUrl, setApiUrl] = useState("https://travelling-diary-app-e5215403a509.herokuapp.com/");

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