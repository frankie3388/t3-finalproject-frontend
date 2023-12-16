import { createContext, useState } from "react";


export const ApiContext = createContext(null)

export default function ApiProvider({children}){

    // Will have to change this URL to our public API url after setting up backend
	const [apiUrl, setApiUrl] = useState("http://localhost:5000");

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